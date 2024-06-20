import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const ParentComponent = () => {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (description) => {
    fetch('http://localhost:8000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos([...todos, data]);
      });
  };

  useEffect(() => {
    fetch('http://localhost:8000/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <TodoForm onSubmit={handleSubmit} />
      <TodoList todos={todos} />
    </div>
  );
};

export default ParentComponent;