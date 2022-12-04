import { FC } from 'react';
import { Tag } from '../../../ui';
import style from './subtask.module.scss';
import { ISubTaskProps } from './subtask.props';

const SubTask: FC<ISubTaskProps> = ({ item }) => {
  console.log(item);
  return (
    <li className={style.item}>
      <div className={style.box}>
        <Tag className={style.item__priority} priority={item.priority}>
          {item.priority}
        </Tag>
      </div>
      <h3 className={style.item__title}>{item.title}</h3>
      <p className={style.item__description}>{item.description}</p>
      <div className={style.date}>
        <p>{item.createdAt}</p>
      </div>
    </li>
  );
};

export default SubTask;
