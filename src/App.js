import React from 'react';
import Button from './components/Button';

function App() {
  return (
    <div className="flex flex-col items-center mt-6">
      <div>
      <input
        class="border border-gray-300 rounded px-6 py-1 mr-2"
        type="text"
        placeholder="Enter your task."
      />
      <Button size="sm" textColor="white" bgColor="blue-500">Add</Button>
      </div>

      <div class="text-lg px-3 py-3 mt-2">
        <p className='inline-block mr-6'>Task 1</p>
        <Button size="sm" textColor="white" bgColor="yellow-500">Update</Button>
        <Button size="sm" textColor="white" bgColor="red-500">Delete</Button>
      </div>
    </div>
  );
}
export default App;
