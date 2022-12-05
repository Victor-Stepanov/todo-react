import cn from 'classnames';
import { FC, useState } from 'react';
import { Button, Input, SearchIcon } from '../../ui';
import style from './search.module.scss';
import { ISearchProps } from './search.props';

const Search: FC<ISearchProps> = ({ className, ...props }) => {
  const [value, setValue] = useState<string>('');
  const handleSeach = () => {
    setValue('');
  };

  //В работе

  return (
    <div className={cn(style.search, className)} {...props}>
      <Input
        maxLength={20}
        name='search'
        className={style.input}
        value={value}
        onChange={event => setValue(event.target.value)}
        placeholder='Поиск...'
      />
      <Button
        onClick={handleSeach}
        className={style.button}
        htmlType={'button'}
        appearance={'primary'}
        disabled={!value}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
