import { Dispatch } from 'react';
import { TBoardsActions } from './../actions/boards';
import { TTaskActions } from './../actions/tasks';
import { rootReducer } from './../reducers/index';

export type RootState = ReturnType<typeof rootReducer>;
type TApplicationActions = TBoardsActions | TTaskActions;

export type AppDispatch = Dispatch<TApplicationActions>;
