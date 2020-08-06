import React from 'react';
import Button from '../components/Button';

const AddTodo = () => {
  return (
    <div>
      <input
        className="border border-gray-300 rounded px-6 py-1 mr-2"
        type="text"
        placeholder="Enter your task."
      />
      <Button size="sm" textColor="white" bgColor="blue-500">
        Add
      </Button>
    </div>
  );
};

export default AddTodo;
