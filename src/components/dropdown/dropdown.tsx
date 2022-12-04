import cn from 'classnames';
import { FC, useState } from 'react';
import { AddIcon, Button, DeleteIcon, EditIcon } from '../../ui';
import DeleteForm from '../form/delete-form/delete';
import EditForm from '../form/edit-form/edit';
import SubTaskForm from '../form/subtask-form/subtask';
import Modal from '../modal/modal';
import style from './dropdown.module.scss';
import { IDropDownProps } from './dropdown.props';

const DropDownMenu: FC<IDropDownProps> = ({ close, active, item }) => {
  const { id } = item;
  const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false);
  const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false);
  const [isOpenAdd, setIsOpenAdd] = useState<boolean>(false);

  const openDeleteForm = () => {
    setIsOpenDelete(!isOpenDelete);
    close();
  };

  const openEditForm = () => {
    setIsOpenEdit(!isOpenEdit);
    close();
  };

  const openAddForm = () => {
    setIsOpenAdd(!isOpenAdd);
    close();
  };
  return (
    <nav
      className={cn(style.navbar, {
        [style.navbar__active]: active,
      })}
    >
      <menu className={style.navbar__list}>
        <li className={style.item} onClick={openDeleteForm}>
          <Button
            className={style.item__btn}
            htmlType={'button'}
            appearance={'ghost'}
          >
            <DeleteIcon />
          </Button>
          <p className={style.item__text}>Delete</p>
        </li>
        <li className={style.item} onClick={openEditForm}>
          <Button
            className={style.item__btn}
            htmlType={'button'}
            appearance={'ghost'}
          >
            <EditIcon />
          </Button>
          <p className={style.item__text}>Edit</p>
        </li>
        <li className={style.item} onClick={openAddForm}>
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
      {isOpenDelete && (
        <Modal
          title='Are you sure?'
          onClose={() => setIsOpenDelete(!isOpenDelete)}
        >
          <DeleteForm id={id} onClose={() => setIsOpenDelete(!isOpenDelete)} />
        </Modal>
      )}
      {isOpenEdit && (
        <Modal title='Edit task' onClose={() => setIsOpenEdit(!isOpenEdit)}>
          <EditForm onClose={() => setIsOpenEdit(!isOpenEdit)} item={item} />
        </Modal>
      )}
      {isOpenAdd && (
        <Modal title='Create subtask' onClose={() => setIsOpenAdd(!isOpenAdd)}>
          <SubTaskForm onClose={() => setIsOpenAdd(!isOpenAdd)} id={id} />
        </Modal>
      )}
    </nav>
  );
};

export default DropDownMenu;
