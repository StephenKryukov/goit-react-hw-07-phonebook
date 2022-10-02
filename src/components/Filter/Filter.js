import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.value);

  const filterChange = e => {
    dispatch(filterContact(e.currentTarget.value));
  };
  return (
    <div className={s.box}>
      <label className={s.label}>
        <span>Find contacts by name:</span>
        <input
          className={s.input}
          value={filter}
          type="name"
          onChange={filterChange}
        />
      </label>
    </div>
  );
};

export default Filter;
