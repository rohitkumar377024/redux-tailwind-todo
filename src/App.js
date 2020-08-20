import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="relative max-w-md flex flex-col items-center mt-6 p-2 rounded-lg shadow-lg bg-white text-gray-900">
      <Header />
      <TodoList />
      <AddTodo />
    </div>
  );
}
export default App;
