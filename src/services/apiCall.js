export const apiCall = () => fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes/')
  .then(res => res.json())
  .then(res => JSON.stringify(res[0]).slice(1, -1));

  

