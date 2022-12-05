import { ISubTask } from '../types/data';
import {
  ADD_SUBTASK,
  REMOVE_SUBTASK,
  TSubTaskActions,
} from './../actions/subtask';

type TInitialState = {
  subtask: ISubTask[] | [];
};

const initialState: TInitialState = {
  subtask: [],
};

export const subTaskReducer = (
  state = initialState,
  action: TSubTaskActions
): TInitialState => {
  switch (action.type) {
    case ADD_SUBTASK: {
      return {
        ...state,
        subtask: [...state.subtask, action.payload],
      };
    }
    case REMOVE_SUBTASK: {
      return {
        ...state,
        subtask: [...state.subtask].filter(item => item.id !== action.id),
      };
    }
    default:
      return state;
  }
};
