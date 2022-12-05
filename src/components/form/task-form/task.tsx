import { FC, FormEvent } from 'react';
import useForm from '../../../hooks/form/useForm';
import { useAppDispatch } from '../../../hooks/hooks';
import { addTask } from '../../../services/actions/tasks';
import { Button, Input, Textarea } from '../../../ui';
import Select from '../../../ui/select/select';
import Form from '../form';
import { ITaskFormProps } from './task.props';

const TaskForm: FC<ITaskFormProps> = ({ id, onClose }) => {
  const dispatch = useAppDispatch();
  const { values, handleChange } = useForm({
    title: '',
    boardId: id,
    description: '',
    createdAt: '',
    finishedAt: '',
    priority: 'low',
    status: 'queue',
    file: '',
  });

  const arrPriority = ['low', 'medium', 'high'];
  const arrStatus = ['queue', 'development', 'done'];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTask(values));
    onClose();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type={'text'}
        name='title'
        value={values.name}
        onChange={handleChange}
        placeholder='Task title'
      />
      <Textarea
        placeholder='Task description'
        name='description'
        value={values.name}
        onChange={handleChange}
      />
      <Input
        type={'date'}
        name='createdAt'
        value={values.name}
        onChange={handleChange}
      />
      <Input
        type={'date'}
        name='finishedAt'
        value={values.name}
        onChange={handleChange}
      />
      <Input
        type={'file'}
        name='file'
        value={values.name}
        onChange={handleChange}
      />
      <Select
        onChange={handleChange}
        value={values.name}
        name={'priority'}
        arrOptions={arrPriority}
      />
      <Select
        name={'status'}
        onChange={handleChange}
        value={values.name}
        arrOptions={arrStatus}
      />
      <Button htmlType={'submit'} appearance={'primary'}>
        Create task
      </Button>
    </Form>
  );
};

export default TaskForm;
