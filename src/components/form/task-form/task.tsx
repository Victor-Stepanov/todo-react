import { FC } from 'react';
import useForm from '../../../hooks/form/useForm';
import { Button, Input, Textarea } from '../../../ui';
import Form from '../form';
import { ITaskFormProps } from './task.props';

const TaskForm: FC<ITaskFormProps> = ({ onClose }) => {
  const { values, handleChange } = useForm({
    title: '',
    description: '',
    createdAt: '',
    timeInWork: '',
    finishedAt: '',
    priority: '',
    file: '',
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(values);
    onClose();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type={'text'}
        name='title'
        value={values.name}
        onChange={handleChange}
        placeholder='Заголовок'
      />
      <Textarea
        name='description'
        value={values.name}
        onChange={handleChange}
      />
      <Input
        type={'date'}
        name='createdAt'
        value={values.name}
        onChange={handleChange}
        placeholder='Дата создания'
      />
      <Input
        type={'text'}
        name='timeInWork'
        value={values.name}
        onChange={handleChange}
        placeholder='Время в работе'
      />
      <Input
        type={'date'}
        name='finishedAt'
        value={values.name}
        onChange={handleChange}
        placeholder='Дата окончания'
      />
      <Input
        type={'file'}
        name='file'
        value={values.name}
        onChange={handleChange}
        placeholder='Дата окончания'
      />
      <Button onClick={handleSubmit} htmlType={'button'} appearance={'primary'}>
        Создать
      </Button>
    </Form>
  );
};

export default TaskForm;
