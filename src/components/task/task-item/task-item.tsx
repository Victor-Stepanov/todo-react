import { FC } from 'react';
import { useDrag } from 'react-dnd';
import useModalState from '../../../hooks/modal/useModalState';
import { Button, Tag } from '../../../ui';
import DropDownMenu from '../../dropdown/dropdown';
import style from './task-item.module.scss';
import { ITaskItemProps } from './task-item.props';

const TaskItem: FC<ITaskItemProps> = ({ item }) => {
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

  const handleDeleteTask = (id: string) => {
    console.log(id);
  };

  const { isOpen, onToggle } = useModalState(false);

  return (
    <li ref={dragRef} className={style.item} draggable>
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
          +
        </Button>
        <DropDownMenu active={isOpen} />
      </div>
      <h3 className={style.item__title}>{item.title}</h3>
      <p className={style.item__description}>{item.description}</p>
      <div className={style.date}>
        <p>{item.createdAt}</p>
      </div>
    </li>
  );
};

export default TaskItem;
