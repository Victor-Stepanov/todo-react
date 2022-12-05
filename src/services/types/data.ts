export interface IBoard {
  id: string;
  name: string;
}

export type TPriority = 'low' | 'medium' | 'high';

export interface IComment {
  id: string;
  taskId: string;
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
  status: string;
}

export interface ISubTask {
  id: string;
  taskId: string;
  title: string;
  description: string;
  createdAt: string;
  priority: TPriority;
}
