import React, { useState, useEffect } from 'react';
import {
  GraphQLSchema,
  getIntrospectionQuery,
  buildClientSchema,
  IntrospectionQuery,
  GraphQLObjectType,
  GraphQLField,
  GraphQLScalarType,
  GraphQLInputObjectType,
} from 'graphql';
import { GraphQLClient } from 'graphql-request';

const ENDPOINT = 'https://rickandmortyapi.com/graphql';
const CLIENT = new GraphQLClient(ENDPOINT);

export default function ApiSchema() {
  const [schema, setSchema] = useState<GraphQLSchema | null>(null);
  const [activeType, setActiveType] = useState<string[]>(['Query']);

  useEffect(() => {
    CLIENT.request(getIntrospectionQuery())
      .then((response) => {
        const clientSchema = buildClientSchema(response as IntrospectionQuery);
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
    setActiveType([...activeType, event.currentTarget.innerText.replace(/[^a-zA-Z]/g, '')]);
  }

  function handleBackClick() {
    setActiveType(activeType.slice(0, -1));
  }

  const renderField = (field: GraphQLField<unknown, unknown>) => {
    return (
      <div key={field.name}>
        <strong style={{ color: 'rgb(95, 137, 216)' }}>{field.name}</strong>
        (
        <br />
        {field.args &&
          field.args.map((arg) => (
            <span key={arg.name} style={{ color: 'rgb(255, 107, 139)' }}>
              {arg.name}:{' '}
              <a style={{ color: 'rgb(235, 156, 0)' }} onClick={handleClick}>
                {arg.type.toString()}
              </a>
              <br />
            </span>
          ))}
        )
        <span>
          {' '}
          :{' '}
          <a style={{ color: 'rgb(235, 156, 0)' }} onClick={handleClick}>
            {field.type.toString()}
          </a>{' '}
        </span>
        {field.description && <p>{field.description}</p>}
      </div>
    );
  };

  const renderType = (type: GraphQLObjectType<unknown, unknown>) => {
    if (type instanceof GraphQLScalarType) {
      return (
        <div key={type.name}>
          {
            <a onClick={handleBackClick} style={{ color: 'rgb(95, 137, 216)' }}>
              {activeType.length === 1 ? '' : `< ${activeType[activeType.length - 2]}`}
            </a>
          }
          <h3>{type.name}</h3>
          <p>{type.description}</p>
        </div>
      );
    }

    if (type instanceof GraphQLObjectType || GraphQLInputObjectType) {
      return (
        <div key={type.name}>
          <a onClick={handleBackClick} style={{ color: 'rgb(95, 137, 216)' }}>
            {activeType.length === 1 ? '' : `< ${activeType[activeType.length - 2]}`}
          </a>
          <h3>{type.name}</h3>
          {type.description && <p>{type.description}</p>}
          {Object.values(type.getFields()).map(renderField)}
        </div>
      );
    }
  };

  return (
    <div>
      <h2>GraphQL Schema</h2>
      <div>
        {Object.values(schema.getTypeMap())
          .filter((item) => item.name === activeType[activeType.length - 1])
          .map((type) => renderType(type as GraphQLObjectType<unknown, unknown>))}
      </div>
    </div>
  );
}
