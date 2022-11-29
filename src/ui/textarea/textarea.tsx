import cn from 'classnames';
import { forwardRef } from 'react';
import style from './textarea.module.scss';
import { ITextareaProps } from './textarea.props';

const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea className={cn(className, style.textarea)} ref={ref} {...props} />
    );
  }
);

export default Textarea;
