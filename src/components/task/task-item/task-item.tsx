import { FC } from 'react';
import { Tag } from '../../../ui';
import style from './task-item.module.scss';
import { ITaskItemProps } from './task-item.props';

const TaskItem: FC<ITaskItemProps> = () => {
  return (
    <li className={style.item}>
      <Tag className={style.item__priority} priority='low'>
        low
      </Tag>
      <h3 className={style.item__title}>Words</h3>
      <p className={style.item__description}></p>
      <div className={style.date}>
        <p>Jan 29th, 2022 </p>
      </div>
    </li>
  );
};

export default TaskItem;
