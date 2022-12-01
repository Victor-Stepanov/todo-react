import { FC } from 'react';
import style from './task-item.module.scss';
import { ITaskItemProps } from './task-item.props';

const TaskItem: FC<ITaskItemProps> = () => {
  return (
    <li className={style.item}>
      <span className={style.item__priority}>low priority</span>
      <h3 className={style.item__title}>Words</h3>
      <p className={style.item__description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra
        venenatis accumsan.
      </p>
      <div className={style.date}>
        <p>Jan 29th, 2022 </p>
        <p>Jan 29th, 2022 </p>
        <p>00:00</p>
      </div>
    </li>
  );
};

export default TaskItem;
