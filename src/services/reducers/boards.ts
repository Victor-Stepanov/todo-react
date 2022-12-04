import { ADD_BOARD, REMOVE_BOARD, TBoardsActions } from './../actions/boards';
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
    case REMOVE_BOARD: {
      return {
        ...state,
        boards: [...state.boards].filter(item => item.id !== action.id),
      };
    }
    default:
      return state;
  }
};
