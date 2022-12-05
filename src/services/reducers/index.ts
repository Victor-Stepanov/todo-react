import { combineReducers } from 'redux';
import { boardsReducer } from './boards';
import { commentsReducer } from './comments';
import { subTaskReducer } from './subtask';
import { tasksReducer } from './tasks';

export const rootReducer = combineReducers({
  boardsData: boardsReducer,
  tasksData: tasksReducer,
  subTaskData: subTaskReducer,
  commentData: commentsReducer,
});
