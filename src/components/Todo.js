import React from 'react';
import Button from './Button';

const Todo = ({ id, task }) => {
  return (
    <div class="text-lg px-3 py-3">
      <p className="inline-block mr-6">{task}</p>
      <Button size="sm" textColor="white" bgColor="yellow-500">
        Update
      </Button>
      <Button size="sm" textColor="white" bgColor="red-500">
        Delete
      </Button>
    </div>
  );
};

export default Todo;
