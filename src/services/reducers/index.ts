import { combineReducers } from 'redux';
import { boardsReducer } from './boards';
import { subTaskReducer } from './subtask';
import { tasksReducer } from './tasks';

export const rootReducer = combineReducers({
  boardsData: boardsReducer,
  tasksData: tasksReducer,
  subTaskData: subTaskReducer,
});
