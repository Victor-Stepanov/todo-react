import { v1 as uuidv1 } from 'uuid';
import { IBoard } from './../types/data';

export const ADD_BOARD = 'ADD_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';

interface IAddBoard {
  readonly type: typeof ADD_BOARD;
  readonly payload: IBoard;
}

interface IRemoveBoard {
  readonly type: typeof REMOVE_BOARD;
  readonly id: string | undefined;
}

export type TBoardsActions = IAddBoard | IRemoveBoard;

export const addBoard = (board: IBoard): IAddBoard => {
  return {
    type: ADD_BOARD,
    payload: {
      ...board,
      id: uuidv1(),
    },
  };
};

export const removeBoard = (id: string | undefined): IRemoveBoard => {
  return {
    type: REMOVE_BOARD,
    id,
  };
};
