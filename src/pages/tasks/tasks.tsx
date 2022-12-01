import Task from '../../components/task/task';
import style from './tasks.module.scss';

const TasksPage = () => {
  return (
    <section className={style.container}>
      <Task title='Queue' />
      <Task title='Development' />
      <Task title='Done' />
    </section>
  );
};

export default TasksPage;
