import { ADD_BOARD, TBoardsActions } from './../actions/boards';
import { IBoards } from './../types/data';

const initialState: IBoards = {
  boards: [],
};

export const boardsReducer = (state = initialState, action: TBoardsActions) => {
  switch (action.type) {
    case ADD_BOARD:
      return {
        ...state,
        boards: [...state.boards, action.payload],
      };
    default:
      return state;
  }
};
