import { ADD_TASK, MOVE_TASK, TTaskActions } from './../actions/tasks';
import { ITask } from './../types/data';

type TInitialState = {
  tasks: ITask[] | [];
};

export const initialState: TInitialState = {
  tasks: [],
};

export const tasksReducer = (
  state = initialState,
  action: TTaskActions
): TInitialState => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }
    case MOVE_TASK: {
      return {
        ...state,
        // tasks: [...state.tasks].find(item => item.id === action.id),
      };
    }
    default:
      return state;
  }
};
