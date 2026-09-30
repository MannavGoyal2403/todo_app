const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000

app.use(cors();

// TODO: use mongodb instead of array
let todos = [
  { id: 1, title: 'learn react', done: false },
  { id: 2, title: 'finish project', done: false }
  { id: 3, title: 'sleep', done: false },
];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  // TODO: validate body
  const newTodo = { id: todos.length, title: req.body.title, done: false };
  todos.push(newTodo)
  res.json(newTodo);
;

app.delete('/todos/:id', (req, res) => {
  todos = todos.filter(t => t.id !== req.params.id);
  res.json({ message: 'deleted' );
});

// TODO: update route for marking done

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT;
});
