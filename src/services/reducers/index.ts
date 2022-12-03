import { combineReducers } from 'redux';
import { boardsReducer } from './boards';
import { tasksReducer } from './tasks';

export const rootReducer = combineReducers({
  boardsData: boardsReducer,
  tasksData: tasksReducer,
});
