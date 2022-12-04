import { v1 as uuidv1 } from 'uuid';
import { ISubTask } from '../types/data';

export const ADD_SUBTASK = 'ADD_SUBTASK';
export const REMOVE_SUBTASK = 'REMOVE_SUBTASK';

interface IAddSubTask {
  readonly type: typeof ADD_SUBTASK;
  readonly payload: ISubTask;
}

interface IRemoveSubTask {
  readonly type: typeof REMOVE_SUBTASK;
  readonly id: string | undefined;
}

export type TSubTaskActions = IAddSubTask | IRemoveSubTask;

export const addSubTask = (item: ISubTask): IAddSubTask => {
  return {
    type: ADD_SUBTASK,
    payload: {
      ...item,
      id: uuidv1(),
    },
  };
};

export const removeSubTask = (id: string | undefined): IRemoveSubTask => {
  return {
    type: REMOVE_SUBTASK,
    id,
  };
};
