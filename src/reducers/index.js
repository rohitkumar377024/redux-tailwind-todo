import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../actionTypes';

const initialState = {
  todos: [
    { id: 1, task: 'Task 1' },
    { id: 2, task: 'Task 2' },
    { id: 3, task: 'Task 3' }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, { todos: [...state.todos, action.payload] });

    case UPDATE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? action.payload : todo
        )
      });

    case DELETE_TODO:
      return Object.assign(
        {},
        { todos: state.todos.filter(todo => todo.id !== action.payload.id) }
      );
    default:
      return state;
  }
};
