import { FC } from 'react';
import { useDrop } from 'react-dnd';
import { useAppDispatch } from '../../hooks/hooks';
import { moveItem } from '../../services/actions/tasks';
import { ITask } from '../../services/types/data';
import TaskItem from './task-item/task-item';
import style from './task.module.scss';
import { ITaskProps } from './task.props';

const Task: FC<ITaskProps> = ({ title, task }) => {
  const dispatch = useAppDispatch();
  const [, dropTarget] = useDrop({
    accept: 'item',
    drop: (item: ITask) => {
      dispatch(moveItem(title.toLowerCase(), item.id));
    },
  });

  return (
    <div className={style.task} ref={dropTarget}>
      <div className={style.task__box}>
        <h2 className={style.task__title}>{title}</h2>
      </div>
      {
        <ul className={style.list}>
          {task && task.map(item => <TaskItem key={item.id} item={item} />)}
        </ul>
      }
    </div>
  );
};

export default Task;
