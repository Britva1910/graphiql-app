import React, { useEffect, useState } from 'react';

export default function ApiSchema() {
  const [schema, setSchema] = useState('Schema');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
      {
        __schema {
          types {
            name
          }
        }
      }
        `,
        variables: {
          now: new Date().toISOString(),
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => JSON.stringify(res))
      .then((result) => setSchema(result))
      .catch((error) => console.error('Error:', error));
  }, []);

  return <div> TODO handle and render schema: {schema}</div>;
}
