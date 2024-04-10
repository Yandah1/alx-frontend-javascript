export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = { data: 'Response from API' };
      resolve(response);
    }, 3000);
  });
}
