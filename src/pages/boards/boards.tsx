import { FC } from 'react';
import { Link } from 'react-router-dom';
import BoardForm from '../../components/form/board-form/board';
import Modal from '../../components/modal/modal';
import { useAppSelector } from '../../hooks/hooks';
import useToggle from '../../hooks/toggle/useModalState';
import { Button } from '../../ui';
import style from './boards.module.scss';

const BoardsPage: FC = () => {
  const { isOpen, onToggle } = useToggle(false);
  const { boards } = useAppSelector(state => state.boardsData);

  return (
    <section className={style.section}>
      <h2 className={style.title}>Рабочее пространство</h2>
      <div className={style.content}>
        <Button
          className={style.content__button}
          htmlType='button'
          appearance={'secondary'}
          onClick={onToggle}
        >
          Создать доску
        </Button>
        {isOpen && (
          <Modal title='Создать новую доску' onClose={onToggle}>
            <BoardForm onClose={onToggle} />
          </Modal>
        )}
        <ul className={style.content__list}>
          {boards &&
            boards.map(item => (
              <Link
                className={style.link}
                key={item.id}
                to={`/boards/${item.id}`}
              >
                <li className={style.item}>
                  <p className={style.item__name}>{item.name}</p>
                </li>
              </Link>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default BoardsPage;
