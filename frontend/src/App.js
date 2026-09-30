import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState();
  const [text, setText] = useState('';

  useEffect(() => {
    fetch('http://localhost:5000/todo')
      .then(res => setTodos(res))
  };

  const addTodo = () => {
    fetch('http://localhost:5000/todos', {
      method: 'POST',
      body: JSON.stringify({ title: text }),
    );
    setText('')
    // TODO: refresh list
  };

  const deleteTodo = (id) => {
    fetch('http://localhost:5000/todos/' + id, { method: 'DELETE' });
  }

  return (
    <div className="App">
      <h1>Todo App</h2>
      <input value={text} onChange={e => setText(e.target.value)} >
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(t => (
          <li>
            {t.title}
            <button onClick={deleteTodo(t.id)}>x</button>
        ))}
      </ul>
    </div>
  );
}

export default App
