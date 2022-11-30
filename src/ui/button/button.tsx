import cn from 'classnames';
import { FC } from 'react';
import style from './button.module.scss';
import { IButtonProps } from './button.props';

const Button: FC<IButtonProps> = ({ appearance, children, className, htmlType }) => {
  const combinedClassName = cn(style.button, className, {
    [style.button__primary]: appearance === 'primary',
    [style.button__secondary]: appearance === 'secondary',
    [style.button__ghost]: appearance === 'ghost',
  });

  return (
    <button className={combinedClassName} type={htmlType}>
      {children}
    </button>
  );
};

export default Button;
