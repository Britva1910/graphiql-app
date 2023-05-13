import React, { useState } from 'react';

import { getIntrospectionQuery } from 'graphql';
import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('https://rickandmortyapi.com/graphql');
export default function ApiSchema() {
  const [schema /* setSchema */] = useState('Schema');

  client
    .request(getIntrospectionQuery())
    .then((data) => {
      console.log('Schema', data);
    })
    .catch((err) => {
      console.error(err);
    });

  return <div> TODO handle and render schema: {schema}</div>;
}
