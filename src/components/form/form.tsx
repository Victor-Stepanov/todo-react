import { FC } from 'react';
import style from './form.module.scss';
import { IFormProps } from './form.props';

const Form: FC<IFormProps> = ({ children, ...props }) => {
  return (
    <form className={style.form} {...props}>
      {children}
    </form>
  );
};

export default Form;
