import Task from '../../components/task/task';
import style from './tasks.module.scss';

const TasksPage = () => {
  return (
    <main className={style.container}>
      <section className={style.content}>
        <Task title='Queue' />
      </section>
    </main>
  );
};

export default TasksPage;
