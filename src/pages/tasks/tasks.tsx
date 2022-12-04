import { useNavigate, useParams } from 'react-router-dom';
import TaskForm from '../../components/form/task-form/task';
import Modal from '../../components/modal/modal';
import Task from '../../components/task/task';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import useModalState from '../../hooks/toggle/useModalState';
import { removeBoard } from '../../services/actions/boards';
import { Button } from '../../ui';
import style from './tasks.module.scss';

const TasksPage = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const { isOpen, onToggle } = useModalState(false);
  const { tasks } = useAppSelector(state => state.tasksData);
  const filterById = tasks.filter(item => item.boardId === id);

  const queue = filterById.filter(item => item.status === 'queue');
  const dev = filterById.filter(item => item.status === 'development');
  const done = filterById.filter(item => item.status === 'done');

  const handleDeleteBoard = () => {
    dispatch(removeBoard(id));
    navigation('/boards');
  };

  return (
    <section className={style.section}>
      <h2 className={style.title}>Tasks</h2>
      <div className={style.control}>
        <span>Search</span>
        <Button onClick={onToggle} htmlType={'button'} appearance={'primary'}>
          Create task
        </Button>
        <Button
          disabled={!!filterById.length}
          onClick={handleDeleteBoard}
          htmlType={'button'}
          appearance={'secondary'}
        >
          Delete board
        </Button>
        {isOpen && (
          <Modal onClose={onToggle}>
            <TaskForm id={id} onClose={onToggle} />
          </Modal>
        )}
      </div>
      <div className={style.content}>
        <Task title='Queue' task={queue} />
        <Task title='Development' task={dev} />
        <Task title='Done' task={done} />
      </div>
    </section>
  );
};

export default TasksPage;
