import React, { useState } from 'react';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleChange = event => setTodo(event.target.value);

  const add = () => {
    addTodo({ task: todo });
    setTodo('');
  };

  return (
    <div>
      <input
        className="border border-gray-300 rounded px-6 py-1 mr-2"
        type="text"
        placeholder="Enter your task."
        onChange={handleChange}
        value={todo}
      />
      <Button click={add} size="sm" textColor="white" bgColor="blue-500">
        Add
      </Button>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);
