import React, { useState } from 'react';
import Button from './Button';
import { connect } from 'react-redux';
import { updateTodo, deleteTodo } from '../actions';

const Todo = ({ id, task, updateTodo, deleteTodo }) => {
  const [todo, setTodo] = useState('');

  const handleChange = event => setTodo(event.target.value);

  const updateItem = () => {
    updateTodo({ id, task: todo });
    setTodo('');
  };

  const deleteItem = () => deleteTodo({ id });

  return (
    <div class="text-lg px-3 py-3">
      <input
        className="inline-block border border-gray-300 mr-6 rounded px-2 py-1"
        onChange={handleChange}
        placeholder={task}
        value={todo}
      />
      <Button click={updateItem} size="sm" textColor="white" bgColor="yellow-500">
        Update
      </Button>
      <Button click={deleteItem} size="sm" textColor="white" bgColor="red-500">
        Delete
      </Button>
    </div>
  );
};

export default connect(null, { updateTodo, deleteTodo })(Todo);
