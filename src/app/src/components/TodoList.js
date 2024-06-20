import React, { useEffect, useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>{todo.description}</li>
      ))}
    </ul>
  );
};

export default TodoList;