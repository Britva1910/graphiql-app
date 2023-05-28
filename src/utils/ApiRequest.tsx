import { GraphQLClient, Variables } from 'graphql-request';
import { setResponseValue, setErrorValue } from '../storage/ResponseFieldSlice';
import { AppDispatch } from '../storage/store';

export async function fetchDataFromApi(query: string, variables: Variables, dispatch: AppDispatch) {
  const ENDPOINT = 'https://rickandmortyapi.com/graphql';
  const CLIENT = new GraphQLClient(ENDPOINT);

  try {
    const data = await CLIENT.request(query, variables);
    const responseText = JSON.stringify(data, null, '\t');
    dispatch(setResponseValue(responseText));
  } catch (error: unknown) {
    const eroorText: string = JSON.stringify(error.response.errors[0], null, '\t');

    dispatch(setErrorValue(eroorText));
    dispatch(setResponseValue(''));
  }
}
