import { FC } from 'react';
import BoardForm from '../../components/form/board-form/board';
import Modal from '../../components/modal/modal';
import useModalState from '../../hooks/modal/useModalState';
import { Button } from '../../ui';
import style from './boards.module.scss';

const BoardsPage: FC = () => {
  const { isOpen, onToggle } = useModalState();
  const handleClick = () => onToggle();
  const boards = [
    {
      name: 'Frontend',
    },
    {
      name: 'Books',
    },
    {
      name: 'English',
    },
    {
      name: 'English1',
    },
    {
      name: 'English2',
    },
    {
      name: 'English3',
    },
    {
      name: 'English4',
    },
    {
      name: 'English6',
    },
  ];

  return (
    <section className={style.section}>
      <h2 className={style.title}>Рабочее пространство</h2>
      <div className={style.content}>
        <Button
          className={style.content__button}
          htmlType='button'
          appearance={'secondary'}
          onClick={handleClick}
        >
          Создать доску
        </Button>
        {isOpen && (
          <Modal title='Создать новую доску' onClose={handleClick}>
            <BoardForm onClose={handleClick} />
          </Modal>
        )}
        <ul className={style.content__list}>
          {boards.map((item, index) => (
            <li key={index} className={style.item}>
              <p className={style.item__name}>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BoardsPage;
