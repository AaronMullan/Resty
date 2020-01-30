export const apiCall = () => fetch('https://api.discogs.com/releases/7391229')
  .then(res => res.json());
