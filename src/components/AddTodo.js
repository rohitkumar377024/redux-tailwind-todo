import React, { useState } from 'react';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import plus from '../img/plus.svg';

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState('');
  const [showModal, setModal] = useState(false);

  const handleChange = event => setTodo(event.target.value);

  const add = () => {
    addTodo({ task: todo });
    setTodo('');
    setModal(false);
  };

  return (
    <div className="cursor-pointer p-4 rounded-full bg-green-400 hover:bg-green-500">
      <img
        onClick={() => setModal(true)}
        className="w-8 h-8"
        src={plus}
        alt="Plus"
      />

      {showModal && (
        <div>
          <div className="bg-translucent w-full h-full absolute top-0 left-0 flex flex-col justify-center">
            <input
              className="border border-gray-300 rounded px-6 py-1 mr-2"
              type="text"
              placeholder="Enter your task."
              onChange={handleChange}
              value={todo}
            />
            <Button click={add} size="sm" textColor="white" bgColor="green-500">
              Add
            </Button>
            <Button
              click={() => setModal(false)}
              size="sm"
              textColor="white"
              bgColor="black"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);
