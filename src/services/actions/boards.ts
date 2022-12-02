import { v1 as uuidv1 } from 'uuid';
import { IBoard } from './../types/data';

export const ADD_BOARD = 'ADD_BOARD';

interface IAddBoard {
  readonly type: typeof ADD_BOARD;
  readonly payload: IBoard;
}

export const addBoard = (board: IBoard): IAddBoard => {
  console.log(board);
  return {
    type: ADD_BOARD,
    payload: {
      ...board,
      id: uuidv1(),
    },
  };
};
