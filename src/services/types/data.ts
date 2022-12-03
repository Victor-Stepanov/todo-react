export interface IBoard {
  id: string;
  name: string;
}

export interface IBoards {
  boards: IBoard[];
}

export type TPriority = 'low' | 'medium' | 'high';
export type TStatus = 'queue' | 'development' | 'done';

export interface IComment {
  id: string;
  name: string;
  description: string;
}

export interface ITask {
  id: string;
  boardId?: string;
  title: string;
  description: string;
  createdAt: string;
  timeDelta?: number;
  finishedAt: string;
  priority: TPriority;
  files?: string[];
  status: TStatus;
  subTasks?: ITask[];
  comment?: IComment[];
}

export interface ITasks {
  tasks: ITask[];
}
