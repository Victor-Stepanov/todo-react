import { v1 as uuidv1 } from 'uuid';
import { IComment } from '../types/data';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

interface IAddComment {
  readonly type: typeof ADD_COMMENT;
  readonly payload: IComment;
}

interface IRemoveComment {
  readonly type: typeof REMOVE_COMMENT;
  readonly id: string | undefined;
}

export type TCommentsActions = IAddComment | IRemoveComment;

export const addComment = (comment: IComment): IAddComment => {
  return {
    type: ADD_COMMENT,
    payload: {
      ...comment,
      id: uuidv1(),
    },
  };
};

export const removeComment = (id: string | undefined): IRemoveComment => {
  return {
    type: REMOVE_COMMENT,
    id,
  };
};
