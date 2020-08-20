import React from 'react';
import Todo from '../components/Todo';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ todos: state.todos });

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} id={todo.id} task={todo.task} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(TodoList);
