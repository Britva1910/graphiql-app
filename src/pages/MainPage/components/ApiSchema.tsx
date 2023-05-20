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
  const [ActiveType, setActiveType] = useState<string>('Query');

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

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    setActiveType(event.currentTarget.innerText.replace(/[\[\]]/g, ''));
  }

  const renderField = (field: GraphQLField<unknown, unknown>) => {
    return (
      <div key={field.name}>
        <a href={`#`}>
          <strong style={{ color: 'rgb(95, 137, 216)' }}>{field.name}</strong>
        </a>{' '}
        (
        <br />
        {field.args.map((arg) => (
          <span key={arg.name} style={{ color: 'rgb(255, 107, 139)' }}>
            {arg.name}:{' '}
            <a href={`#`} style={{ color: 'rgb(235, 156, 0)' }}>
              {arg.type.toString()}
            </a>
            <br />
          </span>
        ))}
        )
        <span>
          {' '}
          :{' '}
          <a href={`#`} style={{ color: 'rgb(235, 156, 0)' }} onClick={handleClick}>
            {field.type.toString()}
          </a>{' '}
        </span>
        {field.description && <p>{field.description}</p>}
      </div>
    );
  };

  const renderType = (type: GraphQLObjectType<unknown, unknown>) => {
    if (!(type instanceof GraphQLObjectType) || type.name.startsWith('__')) {
      // Skip introspection types
      return null;
    }

    console.log(type.name, Object.values(type.getFields()));
    return (
      <div key={type.name}>
        {<h3>{type.name}</h3>}
        {type.description && <p>{type.description}</p>}
        {Object.values(type.getFields()).map(renderField)}
      </div>
    );
  };

  return (
    <div>
      <h1>GraphQL Schema</h1>
      <div>
        {Object.values(schema.getTypeMap())
          .filter((item) => item.name === ActiveType)
          .map((type) => renderType(type as GraphQLObjectType<unknown, unknown>))}
      </div>
    </div>
  );
}
