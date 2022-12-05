import cn from 'classnames';
import { FC } from 'react';
import style from './tag.module.scss';
import { ITagProps } from './tag.props';

const Tag: FC<ITagProps> = ({ priority, children, className }) => {
  return (
    <span
      className={cn(style.tag, className, {
        [style.tag__low]: priority === 'low',
        [style.tag__medium]: priority === 'medium',
        [style.tag__high]: priority === 'high',
      })}
    >
      {children}
    </span>
  );
};

export default Tag;
