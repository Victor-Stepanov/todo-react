import { FC, FormEvent } from 'react';
import useForm from '../../../hooks/form/useForm';
import { useAppDispatch } from '../../../hooks/hooks';
import { addComment } from '../../../services/actions/comments';
import { Button, Input, Textarea } from '../../../ui';
import Form from '../form';
import { ICommentFormProps } from './comment.props';

const CommentForm: FC<ICommentFormProps> = ({ id, onClose }) => {
  const dispatch = useAppDispatch();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addComment(values));
    onClose();
  };
  const { values, handleChange } = useForm({
    name: '',
    description: '',
    taskId: id,
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name='name'
        value={values.name}
        onChange={handleChange}
        placeholder='Name...'
      />
      <Textarea
        name='description'
        value={values.description}
        onChange={handleChange}
        placeholder='Description...'
      />
      <Button
        disabled={!values.name}
        htmlType={'submit'}
        appearance={'primary'}
      >
        Add comment
      </Button>
    </Form>
  );
};

export default CommentForm;
