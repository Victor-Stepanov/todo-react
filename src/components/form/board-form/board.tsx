import { FC, FormEvent } from 'react';
import useForm from '../../../hooks/form/useForm';
import { useAppDispatch } from '../../../hooks/hooks';
import { addBoard } from '../../../services/actions/boards';
import { Button, Input } from '../../../ui';
import Form from '../form';
import style from './board.module.scss';
import { IBoardFormProps } from './boards.props';

const BoardForm: FC<IBoardFormProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const { values, handleChange } = useForm({
    name: '',
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addBoard(values));
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type={'text'}
        name='name'
        placeholder='Название доски...'
        value={values.name}
        onChange={handleChange}
      />
      <div className={style.form__button}>
        <Button appearance={'primary'} htmlType={'submit'}>
          Добавить доску
        </Button>
        <Button onClick={onClose} appearance={'secondary'} htmlType={'button'}>
          Отменить
        </Button>
      </div>
    </Form>
  );
};

export default BoardForm;
