import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../actionTypes';

export const addTodo = ({ id, task }) => ({ type: ADD_TODO, payload: { id, task } });
export const updateTodo =  ({ id, task }) => ({ type: UPDATE_TODO, payload: { id, task } });
export const deleteTodo = ({ id }) => ({ type: DELETE_TODO, payload: { id } });
