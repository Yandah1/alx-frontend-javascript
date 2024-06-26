export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch((error) => {
      console.error(error);
      return new Error();
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}
