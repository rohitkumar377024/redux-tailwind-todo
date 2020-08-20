import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateTodo, deleteTodo } from '../actions';
import cross from '../img/cross.svg';
import pencil from '../img/pencil.svg';
import tick from '../img/tick.svg';

const Todo = ({ id, task, updateTodo, deleteTodo }) => {
  const [todo, setTodo] = useState('');
  const [editMode, setEditMode] = useState(false);

  const handleChange = event => setTodo(event.target.value);

  const updateItem = () => {
    updateTodo({ id, task: todo });
    setEditMode(false);
    setTodo('');
  };

  const deleteItem = () => deleteTodo({ id });

  return (
    <div className="text-lg px-3 py-3 flex">
      {editMode ? (
        <div className="flex">
          <input
            className="w-48 inline-block border border-gray-300 mr-6 rounded px-2 py-1"
            onChange={handleChange}
            placeholder={task}
            value={todo}
          />
          <img
            className="cursor-pointer mt-2 h-6 w-6"
            onClick={updateItem}
            src={tick}
            alt="Done"
          />
        </div>
      ) : (
        <div className="flex items-center">
          <p className="w-48">{task}</p>
          <img
            className="cursor-pointer mt-1 ml-4 h-6 w-6"
            onClick={() => setEditMode(true)}
            src={pencil}
            alt="Update"
          />
          <img
            className="cursor-pointer mt-1 ml-2 h-8 w-8"
            onClick={deleteItem}
            src={cross}
            alt="Delete"
          />
        </div>
      )}
    </div>
  );
};

export default connect(null, { updateTodo, deleteTodo })(Todo);
