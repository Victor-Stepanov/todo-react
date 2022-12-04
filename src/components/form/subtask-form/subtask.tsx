import { FC, FormEvent } from 'react';
import useForm from '../../../hooks/form/useForm';
import { useAppDispatch } from '../../../hooks/hooks';
import { addSubTask } from '../../../services/actions/subtask';
import { Button, Input, Select, Textarea } from '../../../ui';
import Form from '../form';
import { ISubTaskFormProps } from './subtask.props';

const SubTaskForm: FC<ISubTaskFormProps> = ({ id, onClose }) => {
  const dispatch = useAppDispatch();
  const { values, handleChange } = useForm({
    taskId: id,
    title: '',
    description: '',
    createdAt: '',
    priority: 'low',
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addSubTask(values));
    onClose();
  };

  const arrPriority = ['low', 'medium', 'high'];
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type={'text'}
        name='title'
        value={values.name}
        onChange={handleChange}
        placeholder='Subtask title'
      />
      <Textarea
        name='description'
        value={values.name}
        onChange={handleChange}
        placeholder='Subtask description...'
      />
      <Input
        type={'date'}
        name='createdAt'
        value={values.name}
        onChange={handleChange}
      />
      <Select
        name='priority'
        value={values.name}
        onChange={handleChange}
        arrOptions={arrPriority}
      />
      <Button htmlType={'submit'} appearance={'primary'}>
        Create
      </Button>
    </Form>
  );
};

export default SubTaskForm;
