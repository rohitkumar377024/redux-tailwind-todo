import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="flex flex-col items-center mt-6 bg-gray-100 max-w-md">
      <Header />
      <TodoList />
      <AddTodo />
    </div>
  );
}
export default App;
