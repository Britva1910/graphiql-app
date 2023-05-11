import { GraphQLClient } from 'graphql-request';
import { setResponseValue, setErrorValue } from '../pages/MainPage/components/ResponseFieldSlice';
import { AppDispatch } from '../app/store';

export async function fetchDataFromApi(
  query: string,
  variables: Record<string, number>,
  dispatch: AppDispatch
) {
  const endpoint = 'https://rickandmortyapi.com/graphql';
  const client = new GraphQLClient(endpoint);

  try {
    const data = await client.request(query, variables);
    const responseText = JSON.stringify(data, null, '\t');
    dispatch(setResponseValue(responseText));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    const eroorText = JSON.stringify(error.response.errors, null, '\t');
    dispatch(setErrorValue(eroorText));
  }
}
