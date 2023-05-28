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

import './ApiSchema.scss';

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
    /*     console.log('activeType :>> ', activeType); */
  }

  function handleBackClick() {
    setActiveType(activeType.slice(0, -1));
  }

  const renderField = (field: GraphQLField<unknown, unknown>) => {
    return (
      <div key={field.name} className="field">
        <code>
          <strong className="field__name">{field.name}</strong> (<br />
          {field.args &&
            field.args.map((arg) => (
              <span key={arg.name} className="field__arg">
                {arg.name}:{' '}
                <a className="field__arg-type" onClick={handleClick}>
                  {arg.type.toString()}
                </a>
                <br />
              </span>
            ))}
          )
          <span>
            {' '}
            :{' '}
            <a className="field__type" onClick={handleClick}>
              {field.type.toString()}
            </a>{' '}
          </span>
        </code>
        {field.description && <p className="field__description">{field.description}</p>}
      </div>
    );
  };

  const renderType = (type: GraphQLObjectType<unknown, unknown>) => {
    /*   if (!(type instanceof GraphQLObjectType) || type.name.startsWith('__')) {
      // Skip introspection types
      return null;
    } */

    /*     console.log('schema.getTypeMap', Object.values(schema.getTypeMap())); */

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

    /*     console.log(type.name, Object.values(type.getFields())); */

    if (type instanceof GraphQLObjectType || GraphQLInputObjectType) {
      return (
        <div key={type.name}>
          <a onClick={handleBackClick} className="schema__back">
            {activeType.length === 1 ? '' : `< ${activeType[activeType.length - 2]}`}
          </a>
          <h3 className="schema__type">{type.name}</h3>
          {type.description && <p>{type.description}</p>}
          {Object.values(type.getFields()).map(renderField)}
        </div>
      );
    }
  };

  return (
    <section className="schema">
      <h1 className="schema__title">GraphQL Schema</h1>
      <>
        {/*Filter fields and chose active field for render */}
        {Object.values(schema.getTypeMap())
          .filter((item) => item.name === activeType[activeType.length - 1])
          .map((type) => renderType(type as GraphQLObjectType<unknown, unknown>))}
      </>
    </section>
  );
}

/* Query -->
  character --> type --> _fields
                            created --> type --> description
                                                    "описание"
                            episode
                            gender --> type --> scalarType
                            id
                            image
                            location --> type --> _fields
                                                    created
                                                    dimension
                                                    id
                                                    name
                                                    residents
                                                    type
                            name
                            origin
                            species
                            status
                            type
                            
  characters
  charactersByIds
  location
  locations
  locationsByIds
  episode
  episodes
  episodesByIds */
