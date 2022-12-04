import { FC } from 'react';
import { useDrag } from 'react-dnd';
import useToggle from '../../../hooks/toggle/useModalState';
import { Button, MenuIcon, Tag } from '../../../ui';
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

  const { isOpen, onToggle } = useToggle(false);

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
    </li>
  );
};

export default TaskItem;
