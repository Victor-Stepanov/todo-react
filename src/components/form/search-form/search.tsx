import useForm from '../../../hooks/form/useForm';
import { useAppSelector } from '../../../hooks/hooks';
import { ITask } from '../../../services/types/data';
import { Button, Input, SearchIcon, Select } from '../../../ui';
import Form from '../form';
import SearchItem from './search-item/search-item';
import style from './search.module.scss';

const SearchForm = () => {
  const { tasks } = useAppSelector(state => state.tasksData);
  const { values, handleChange } = useForm({
    search: '',
    category: '',
  });

  const filterBy = () => {
    let result: ITask[] = [];
    switch (values.category) {
      case 'title':
        result = tasks.filter(item =>
          item.title.toLowerCase().includes(values.search.toLowerCase())
        );
        break;
      case 'description':
        result = tasks.filter(item =>
          item.description.toLowerCase().includes(values.search.toLowerCase())
        );
        break;
    }

    return result;
  };

  const searchBy = ['title', 'description'];
  return (
    <Form>
      <Select
        name='category'
        value={values.name}
        onChange={handleChange}
        arrOptions={searchBy}
      />
      <div className={style.search}>
        <Input
          maxLength={20}
          name='search'
          className={style.input}
          value={values.name}
          onChange={handleChange}
          placeholder='Поиск...'
        />
        <Button
          onClick={filterBy}
          className={style.button}
          htmlType={'button'}
          appearance={'primary'}
          disabled={!values.search}
        >
          <SearchIcon />
        </Button>
        {filterBy().map(item => (
          <SearchItem key={item.id} item={item} />
        ))}
      </div>
    </Form>
  );
};

export default SearchForm;
