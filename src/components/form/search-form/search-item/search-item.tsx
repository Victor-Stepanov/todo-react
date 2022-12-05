import { FC } from 'react';
import style from './search-item.module.scss';
import { ISearchItemProps } from './search-item.props';

const SearchItem: FC<ISearchItemProps> = ({ item }) => {
  return (
    <article className={style.item}>
      <h3 className={style.item__title}>{item.title}</h3>
      <p className={style.item__description}>{item.description}</p>
      <div className={style.date}>
        <p>{item.createdAt}</p>
      </div>
    </article>
  );
};

export default SearchItem;
