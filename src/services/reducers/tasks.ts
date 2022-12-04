import {
  ADD_TASK,
  EDIT_TASK,
  MOVE_TASK,
  REMOVE_TASK,
  TTaskActions,
} from './../actions/tasks';
import { ISubTask, ITask } from './../types/data';

type TInitialState = {
  tasks: ITask[] | [];
  subtask: ISubTask[] | [];
};

const initialState: TInitialState = {
  tasks: [],
  subtask: [],
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
    case REMOVE_TASK: {
      return {
        ...state,
        tasks: [...state.tasks].filter(item => item.id !== action.id),
      };
    }
    case EDIT_TASK: {
      return {
        ...state,
        tasks: state.tasks.map(item =>
          item.id === action.task.id ? action.task : item
        ),
      };
    }
    case MOVE_TASK: {
      return {
        ...state,
        tasks: [...state.tasks].map(item =>
          item.id === action.id ? { ...item, status: action.title } : item
        ),
      };
    }
    default:
      return state;
  }
};
