import { FC } from 'react';
import { useDrag } from 'react-dnd';
import { useAppSelector } from '../../../hooks/hooks';
import useToggle from '../../../hooks/toggle/useModalState';
import { Button, MenuIcon, Tag } from '../../../ui';
import Comments from '../../comments/comments';
import DropDownMenu from '../../dropdown/dropdown';
import SubTask from '../subtask-item/subtask';
import style from './task-item.module.scss';
import { ITaskItemProps } from './task-item.props';

const TaskItem: FC<ITaskItemProps> = ({ item }) => {
  const { id } = item;
  const { subtask } = useAppSelector(state => state.subTaskData);
  const { comments } = useAppSelector(state => state.commentData);
  const [, dragRef] = useDrag(
    {
      type: 'item',
      item: item,
    },
    [item]
  );

  const { isOpen, onToggle } = useToggle(false);
  const filteredTask = subtask.filter(task => task.taskId === id);
  const filteredComments = comments.filter(comment => comment.taskId === id);

  return (
    <li ref={dragRef} className={style.item} draggable>
      <div className={style.box}>
        <Tag className={style.item__priority} priority={item.priority}>
          {item.priority}
        </Tag>
        <div className={style.item__control}>
          <Button
            className={style.item__btn}
            onClick={onToggle}
            htmlType={'button'}
            appearance={'ghost'}
          >
            <MenuIcon />
          </Button>
          <DropDownMenu close={onToggle} active={isOpen} item={item} />
        </div>
      </div>
      <h3 className={style.item__title}>{item.title}</h3>
      <p className={style.item__description}>{item.description}</p>
      <div className={style.date}>
        <p className={style.date__create}>
          <span>Create: </span>
          {item.createdAt}
        </p>
        <p className={style.date__finish}>
          <span>Finish: </span>
          {item.finishedAt}
        </p>
      </div>
      <ul className={style.comments}>
        {filteredComments &&
          filteredComments.map(item => <Comments key={item.id} item={item} />)}
      </ul>
      <ul className={style.subtask}>
        {filteredTask &&
          filteredTask.map(item => <SubTask key={item.id} item={item} />)}
      </ul>
    </li>
  );
};

export default TaskItem;
