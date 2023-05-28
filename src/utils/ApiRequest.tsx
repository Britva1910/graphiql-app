import { GraphQLClient, Variables } from 'graphql-request';
import { setResponseValue, setErrorValue } from '../storage/ResponseFieldSlice';
import { AppDispatch } from '../storage/store';

export async function fetchDataFromApi(query: string, variables: Variables, dispatch: AppDispatch) {
  const ENDPOINT = 'https://rickandmortyapi.com/graphql';
  const CLIENT = new GraphQLClient(ENDPOINT);

  CLIENT.request(query, variables)
    .then((data) => JSON.stringify(data, null, '\t'))
    .then((responseText) => {
      dispatch(setResponseValue(responseText));
    })
    .catch((error) => {
      const errorText: string = JSON.stringify(error.response.errors[0], null, '\t');
      dispatch(setErrorValue(errorText));
      dispatch(setResponseValue(''));
    });
}
