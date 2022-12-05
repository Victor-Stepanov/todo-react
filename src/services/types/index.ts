import { Dispatch } from 'react';
import { TBoardsActions } from './../actions/boards';
import { TCommentsActions } from './../actions/comments';
import { TSubTaskActions } from './../actions/subtask';
import { TTaskActions } from './../actions/tasks';
import { rootReducer } from './../reducers/index';

export type RootState = ReturnType<typeof rootReducer>;
type TApplicationActions =
  | TBoardsActions
  | TTaskActions
  | TSubTaskActions
  | TCommentsActions;

export type AppDispatch = Dispatch<TApplicationActions>;
