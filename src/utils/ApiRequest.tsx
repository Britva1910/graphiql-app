import { GraphQLClient } from 'graphql-request';

export async function fetchDataFromApi(
  query: string,
  variables: Record<string, unknown> = {},
  setResponseText: (newResponseText: string) => void
) {
  const endpoint = 'https://rickandmortyapi.com/graphql';
  const client = new GraphQLClient(endpoint);

  try {
    const data = await client.request(query, variables);
    const responseText = JSON.stringify(data, null, '\t');
    setResponseText(responseText);
  } catch (error) {
    console.error(error);
  }
}
