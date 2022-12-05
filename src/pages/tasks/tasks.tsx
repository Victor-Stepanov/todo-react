import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SearchForm from '../../components/form/search-form/search';
import TaskForm from '../../components/form/task-form/task';
import Modal from '../../components/modal/modal';
import Task from '../../components/task/task';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import useModalState from '../../hooks/toggle/useModalState';
import { removeBoard } from '../../services/actions/boards';
import { Button, SearchIcon } from '../../ui';
import style from './tasks.module.scss';

const TasksPage = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const { isOpen, onToggle } = useModalState(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);
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
        <Button
          onClick={() => setIsSearch(!isSearch)}
          htmlType={'button'}
          appearance={'primary'}
        >
          <SearchIcon /> <span>Search</span>
        </Button>
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
      </div>
      {isOpen && (
        <Modal title='Create task' onClose={onToggle}>
          <TaskForm id={id} onClose={onToggle} />
        </Modal>
      )}
      {isSearch && (
        <Modal title='Search task by' onClose={() => setIsSearch(!isSearch)}>
          <SearchForm />
        </Modal>
      )}
      <div className={style.content}>
        <Task title='Queue' task={queue} />
        <Task title='Development' task={dev} />
        <Task title='Done' task={done} />
      </div>
    </section>
  );
};

export default TasksPage;
