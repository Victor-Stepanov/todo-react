import { ADD_BOARD, REMOVE_BOARD, TBoardsActions } from './../actions/boards';
import { IBoard } from './../types/data';

type TInitialState = {
  boards: IBoard[] | [];
};

const initialState: TInitialState = {
  boards: [],
};

export const boardsReducer = (
  state = initialState,
  action: TBoardsActions
): TInitialState => {
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
