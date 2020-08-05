import express from 'express';

const routes = express.Router();

routes.get('/users', (request, response) => {
  const users = [
    { name: 'Diego', age: 25},
    { name: 'Diego', age: 25},
    { name: 'Diego', age: 25},
  ];

  return response.json(users);
});

export default routes;
