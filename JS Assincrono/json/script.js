/*const url = 'https://jsonplaceholder.typicode.com/posts/2';
const options = {
  method: 'PUT',
  body: '{"aula": "JavaScript"}',
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  },
}

fetch(url, options)
.then(response => response.json())
.then(json => {
  console.log(json);
}); */

const url = 'https://jsonplaceholder.typicode.com/posts/2/';

fetch(url, {
  method: 'HEAD',
})
.then(response => {
  response.headers.forEach(console.log);
  console.log(response.headers.get('Content-Type'));
});