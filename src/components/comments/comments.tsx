import { FC } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { removeComment } from '../../services/actions/comments';
import { Button, DeleteIcon } from '../../ui';
import style from './comments.module.scss';
import { ICommentsProps } from './comments.props';

const Comments: FC<ICommentsProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(removeComment(item.id));
  };
  return (
    <article className={style.container}>
      <div className={style.comment}>
        <p className={style.comment__name}>{item.name}</p>
        <p className={style.comment__description}>{item.description}</p>
      </div>
      <Button onClick={handleDelete} htmlType={'button'} appearance={'ghost'}>
        <DeleteIcon />
      </Button>
    </article>
  );
};

export default Comments;
