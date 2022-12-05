import { IComment } from '../types/data';
import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  TCommentsActions,
} from './../actions/comments';

type TInitialState = {
  comments: IComment[] | [];
};

const initialState: TInitialState = {
  comments: [],
};

export const commentsReducer = (
  state = initialState,
  action: TCommentsActions
): TInitialState => {
  switch (action.type) {
    case ADD_COMMENT: {
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    }
    case REMOVE_COMMENT: {
      return {
        ...state,
        comments: [...state.comments].filter(item => item.id !== action.id),
      };
    }
    default:
      return state;
  }
};
