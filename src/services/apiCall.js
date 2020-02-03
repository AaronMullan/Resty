export const apiCall = (url, method, jsoninput) => fetch(url, { 
  method: method, 
  headers: { 'Content-Type': 'application/json' },
  body: ['POST', 'PUT', 'PATCH'].includes(method) ? jsoninput : null
})
  .then(res => res.json());
