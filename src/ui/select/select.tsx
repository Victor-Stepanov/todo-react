import { forwardRef } from 'react';
import style from './select.module.scss';
import { ISelectProps } from './select.props';

const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  ({ arrOptions, name, ...props }, ref) => {
    const options = arrOptions.map((value, index) => {
      return <option key={index}>{value}</option>;
    });
    return (
      <select ref={ref} className={style.select} name={name} {...props}>
        {options}
      </select>
    );
  }
);

export default Select;
