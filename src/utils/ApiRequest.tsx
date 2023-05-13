import { GraphQLClient, Variables } from 'graphql-request';
import { setResponseValue, setErrorValue } from '../pages/MainPage/components/ResponseFieldSlice';
import { AppDispatch } from '../storage/store';

export async function fetchDataFromApi(query: string, variables: Variables, dispatch: AppDispatch) {
  const ENDPOINT = 'https://rickandmortyapi.com/graphql';
  const CLIENT = new GraphQLClient(ENDPOINT);

  try {
    const data = await CLIENT.request(query, variables);
    const responseText = JSON.stringify(data, null, '\t');
    dispatch(setResponseValue(responseText));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    const eroorText = JSON.stringify(error.response.errors[0], null, '\t');

    dispatch(setErrorValue(eroorText));
    dispatch(setResponseValue(''));
  }
}
