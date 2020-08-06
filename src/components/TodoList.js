import React from 'react';
import Button from '../components/Button';
import Todo from '../components/Todo';

const TodoList = () => {
  return (
    <div className="mt-4">
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
};

export default TodoList;
