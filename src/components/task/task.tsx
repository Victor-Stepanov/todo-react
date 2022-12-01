import { FC } from 'react';
import TaskItem from './task-item/task-item';
import style from './task.module.scss';
import { ITaskProps } from './task.props';

const Task: FC<ITaskProps> = ({ title }) => {
  return (
    <article className={style.task}>
      <div className={style.task__box}>
        <h2 className={style.task__title}>{title}</h2>
      </div>
      <ul className={style.list}>
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </ul>
    </article>
  );
};

export default Task;
