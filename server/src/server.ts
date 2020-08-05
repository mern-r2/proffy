import express from 'express';

const app = express();

app.use(express.json());

app.post('/users', (request, response) => {
  console.log(request.body);

  const users = [
    { name: 'Diego', age: 25},
    { name: 'Diego', age: 25},
    { name: 'Diego', age: 25},
  ];

  return response.json(users);
});

app.listen(3333);