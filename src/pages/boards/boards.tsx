import { FC } from 'react';
import style from './boards.module.scss';

const BoardsPage: FC = () => {
  const boards = [];
  return (
    <section className={style.section}>
      <h2 className={style.boards__title}>Рабочее пространство</h2>
      <div></div>
    </section>
  );
};

export default BoardsPage;
