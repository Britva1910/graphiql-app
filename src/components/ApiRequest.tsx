export function ApiRequest(value: string, setNewValue: (newValue: string) => void) {
  fetch('https://rickandmortyapi.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: value,
    }),
  })
    .then((res) => res.json())
    .then((res) => JSON.stringify(res, null, '\t'))
    .then((res) => setNewValue(res));
}
