import { FC } from 'react';
import useForm from '../../../hooks/form/useForm';
import { useAppDispatch } from '../../../hooks/hooks';
import { editTask } from '../../../services/actions/tasks';
import { Button, Input, Textarea } from '../../../ui';
import Select from '../../../ui/select/select';
import Form from '../form';
import { IEditFormProps } from './edit.props';

const EditForm:FC<IEditFormProps> = ({onClose, boardId, id}) => {
    //TODO:Разобраться, что делать дальше)
  const dispatch = useAppDispatch();
  const { values, handleChange } = useForm({
    title: '',
    id: '',
    boardId: '',
    description: '',
    createdAt: '',
    finishedAt: '',
    priority: 'low',
    status: 'queue',
    file: '',
  });

  const arrPriority = ['low', 'medium', 'high'];
  const arrStatus = ['queue', 'development', 'done'];

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(editTask(values));
  };

  return (
    <Form>
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
      <Button onClick={handleSubmit} htmlType={'button'} appearance={'primary'}>
        Создать
      </Button>
    </Form>
  );
};

export default EditForm;
