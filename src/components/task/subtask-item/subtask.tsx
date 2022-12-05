import { FC } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { removeSubTask } from '../../../services/actions/subtask';
import { Button, DeleteIcon, Tag } from '../../../ui';
import style from './subtask.module.scss';
import { ISubTaskProps } from './subtask.props';

const SubTask: FC<ISubTaskProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(removeSubTask(item.id));
  };
  return (
    <li className={style.item}>
      <div className={style.item__control}>
        <Tag className={style.item__priority} priority={item.priority}>
          {item.priority}
        </Tag>
        <Button onClick={handleDelete} appearance={'ghost'} htmlType={'button'}>
          <DeleteIcon />
        </Button>
      </div>
      <h3 className={style.item__title}>{item.title}</h3>
      <p className={style.item__description}>{item.description}</p>
      <div className={style.date}>
        <p className={style.date__create}>
          <span>Create: </span>
          {item.createdAt}
        </p>
      </div>
    </li>
  );
};

export default SubTask;
