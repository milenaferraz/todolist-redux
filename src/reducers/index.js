import { combineReducers } from 'redux';
import { todos } from './todo';

export const reducers = combineReducers({
    todoState: todos,
});