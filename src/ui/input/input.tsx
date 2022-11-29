import cn from 'classnames';
import { forwardRef } from 'react';
import style from './input.module.scss';
import { IInputProps } from './input.props';

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ className, ...props }, ref) => {
    return <input className={cn(className, style.input)} ref={ref} type='text' {...props} />;
  }
);

export default Input;
