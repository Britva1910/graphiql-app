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
import { useTranslation } from 'react-i18next';

import './ApiSchema.scss';

const ENDPOINT = 'https://rickandmortyapi.com/graphql';
const CLIENT = new GraphQLClient(ENDPOINT);

export default function ApiSchema() {
  const [schema, setSchema] = useState<GraphQLSchema | null>(null);
  const [activeType, setActiveType] = useState<string[]>(['Query']);
  const { t } = useTranslation();

  useEffect(() => {
    CLIENT.request(getIntrospectionQuery())
      .then((response) => {
        const clientSchema = buildClientSchema(response as IntrospectionQuery);
        const schema = new GraphQLSchema({ query: clientSchema.getQueryType() });
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
      <div key={field.name} className="field">
        <code>
          <strong className="field__name">{field.name}</strong>
          (
          <br />
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
      <h1 className="schema__title">{t('main.schema')}</h1>
      <>
        {Object.values(schema.getTypeMap())
          .filter((item) => item.name === activeType[activeType.length - 1])
          .map((type) => renderType(type as GraphQLObjectType<unknown, unknown>))}
      </>
    </section>
  );
}
