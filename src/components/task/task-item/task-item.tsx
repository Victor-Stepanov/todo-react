import { FC } from 'react';
import { useDrag } from 'react-dnd';
import { useAppSelector } from '../../../hooks/hooks';
import useToggle from '../../../hooks/toggle/useModalState';
import { Button, MenuIcon, Tag } from '../../../ui';
import DropDownMenu from '../../dropdown/dropdown';
import SubTask from '../subtask-item/subtask';
import style from './task-item.module.scss';
import { ITaskItemProps } from './task-item.props';

const TaskItem: FC<ITaskItemProps> = ({ item }) => {
  const { subtask } = useAppSelector(state => state.subTaskData);
  const [{ isDrag }, dragRef] = useDrag(
    {
      type: 'item',
      item: item,
      collect: monitor => ({
        isDrag: monitor.isDragging(),
      }),
    },
    [item]
  );

  const { isOpen, onToggle } = useToggle(false);
  const filteredTask = subtask.filter(task => task.taskId === item.id);
  console.log(filteredTask);

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
        <p>{item.createdAt}</p>
      </div>
      <ul>
        {filteredTask.length > 0 && (
          <h4 className={style.item__title}>Список подзадач:</h4>
        )}
        {filteredTask &&
          filteredTask.map(item => <SubTask key={item.id} item={item} />)}
      </ul>
    </li>
  );
};

export default TaskItem;
