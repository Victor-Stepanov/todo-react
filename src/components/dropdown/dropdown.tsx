import cn from 'classnames';
import { FC } from 'react';
import { AddIcon, Button, DeleteIcon, EditIcon } from '../../ui';
import style from './dropdown.module.scss';
import { IDropDownProps } from './dropdown.props';

const DropDownMenu: FC<IDropDownProps> = ({ active }) => {
  return (
    <nav
      className={cn(style.navbar, {
        [style.navbar__active]: active,
      })}
    >
      <menu className={style.navbar__list}>
        <li className={style.item}>
          <Button
            className={style.item__btn}
            htmlType={'button'}
            appearance={'ghost'}
          >
            <DeleteIcon />
          </Button>
          <p className={style.item__text}>Delete</p>
        </li>
        <li className={style.item}>
          <Button
            className={style.item__btn}
            htmlType={'button'}
            appearance={'ghost'}
          >
            <EditIcon />
          </Button>
          <p className={style.item__text}>Edit</p>
        </li>
        <li className={style.item}>
          <Button
            className={style.item__btn}
            htmlType={'button'}
            appearance={'ghost'}
          >
            <AddIcon />
          </Button>
          <p className={style.item__text}>Add</p>
        </li>
      </menu>
    </nav>
  );
};

export default DropDownMenu;
