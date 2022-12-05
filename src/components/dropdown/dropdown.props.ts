import { ITask } from './../../services/types/data';
export interface IDropDownProps {
  active: boolean;
  item: ITask;
  close: () => void;
}
