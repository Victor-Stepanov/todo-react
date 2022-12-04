import { FC, FormEvent } from 'react';
import useForm from '../../../hooks/form/useForm';
import { useAppDispatch } from '../../../hooks/hooks';
import { editTask } from '../../../services/actions/tasks';
import { Button, Input, Textarea } from '../../../ui';
import Select from '../../../ui/select/select';
import Form from '../form';
import { IEditFormProps } from './edit.props';

const EditForm: FC<IEditFormProps> = ({ onClose, item }) => {
  //TODO:
  const {
    title,
    id,
    boardId,
    description,
    createdAt,
    finishedAt,
    priority,
    status,
  } = item;
  const dispatch = useAppDispatch();
  const { values, handleChange } = useForm({
    title: title,
    id: id,
    boardId: boardId,
    description: description,
    createdAt: createdAt,
    finishedAt: finishedAt,
    priority: priority,
    status: status,
  });

  const arrPriority = ['low', 'medium', 'high'];
  const arrStatus = ['queue', 'development', 'done'];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(editTask(values));
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
        placeholder='Описание задачи...'
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
        type={'date'}
        name='finishedAt'
        value={values.name}
        onChange={handleChange}
        placeholder='Дата окончания'
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
        Изменить
      </Button>
    </Form>
  );
};

export default EditForm;
