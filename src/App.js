import React from 'react';
import Button from './components/Button';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="flex flex-col items-center mt-6">
      <AddTodo />
      <TodoList />
    </div>
  );
}
export default App;
