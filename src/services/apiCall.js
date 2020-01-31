export const apiCall = (url, method, jsoninput) => fetch(url, { 
  method: method, 
  headers: { 'Content-Type': 'application/json' },
  body: jsoninput
})
  .then(res => res.json());


// export const apiCall = (url) => fetch(`${url}`)
//   .then(res => res.json());
  

