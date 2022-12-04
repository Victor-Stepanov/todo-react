import { v1 as uuidv1 } from 'uuid';
import { ITask } from './../types/data';

export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const MOVE_TASK = 'MOVE_TASK';

interface IAddTask {
  readonly type: typeof ADD_TASK;
  readonly payload: ITask;
}

interface IEditTask {
  readonly type: typeof EDIT_TASK;
  readonly task: ITask;
}

interface IRemoveTask {
  readonly type: typeof REMOVE_TASK;
  readonly id: string | undefined;
}

interface IMoveItem {
  readonly type: typeof MOVE_TASK;
  readonly title: string;
  readonly id: string;
}

export type TTaskActions = IAddTask | IEditTask | IRemoveTask | IMoveItem;

export const addTask = (task: ITask): IAddTask => {
  return {
    type: ADD_TASK,
    payload: {
      ...task,
      id: uuidv1(),
    },
  };
};

export const removeTask = (id: string | undefined): IRemoveTask => {
  return {
    type: REMOVE_TASK,
    id,
  };
};

export const moveItem = (title: string, id: string): IMoveItem => {
  console.log(title, id);
  return {
    type: MOVE_TASK,
    title,
    id,
  };
};

export const editTask = (task: ITask): IEditTask => {
  console.log(task);
  return {
    type: EDIT_TASK,
    task,
  };
};
