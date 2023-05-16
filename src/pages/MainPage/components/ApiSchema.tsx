import React, { useState, useEffect } from 'react';
import {
  GraphQLSchema,
  getIntrospectionQuery,
  buildClientSchema,
  /*   printSchema, */
  IntrospectionQuery,
  GraphQLObjectType,
  GraphQLField,
} from 'graphql';
import { GraphQLClient } from 'graphql-request';

const ENDPOINT = 'https://rickandmortyapi.com/graphql';
const CLIENT = new GraphQLClient(ENDPOINT);

export default function ApiSchema() {
  const [schema, setSchema] = useState<GraphQLSchema | null>(null);

  useEffect(() => {
    CLIENT.request(getIntrospectionQuery())
      .then((response) => {
        const clientSchema = buildClientSchema(response as IntrospectionQuery);
        /*         const sdlSchema = printSchema(clientSchema); */
        const schema = new GraphQLSchema({ query: clientSchema.getQueryType() });
        console.log('schema :>> ', schema);
        setSchema(schema);
      })
      .catch((error) => {
        console.error(error);
        setSchema(null);
      });
  }, []);

  if (!schema) {
    return <div>{/* Loading schema... */}</div>;
  }

  const renderField = (field: GraphQLField<unknown, unknown>) => {
    return (
      <div key={field.name}>
        <strong>{field.name}</strong>
        {field.args.map((arg) => (
          <span key={arg.name}>
            {arg.name}: {arg.type.toString()}
          </span>
        ))}
        <span> : {field.type.toString()}</span>
        {field.description && <p>{field.description}</p>}
      </div>
    );
  };

  const renderType = (type: GraphQLObjectType<unknown, unknown>) => {
    if (!(type instanceof GraphQLObjectType) || type.name.startsWith('__')) {
      // Skip introspection types
      return null;
    }

    return (
      <div key={type.name}>
        <h3>{type.name}</h3>
        {type.description && <p>{type.description}</p>}
        {Object.values(type.getFields()).map(renderField)}
      </div>
    );
  };

  return (
    <div>
      <h1>GraphQL Schema</h1>
      <div>
        {Object.values(schema.getTypeMap()).map((type) =>
          renderType(type as GraphQLObjectType<unknown, unknown>)
        )}
      </div>
    </div>
  );
}
