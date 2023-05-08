export function fetchDataFromApi(
  query: string,
  setResponseText: (newResponseText: string) => void
) {
  fetch('https://rickandmortyapi.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
    }),
  })
    .then((res) => res.json())
    .then((res) => JSON.stringify(res, null, '\t'))
    .then((res) => setResponseText(res));
}
