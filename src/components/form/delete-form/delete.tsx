import { FC } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { removeTask } from '../../../services/actions/tasks';
import { Button } from '../../../ui';
import Form from '../form';
import { IDeleteFormProps } from './delete.props';

const DeleteForm: FC<IDeleteFormProps> = ({ onClose, id }) => {
  const dispatch = useAppDispatch();
  const handleDeleteTask = () => {
    dispatch(removeTask(id));
    onClose();
  };
  return (
    <Form>
      <Button
        onClick={handleDeleteTask}
        htmlType={'button'}
        appearance={'primary'}
      >
        Удалить
      </Button>
    </Form>
  );
};

export default DeleteForm;
