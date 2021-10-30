import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import { sortPictures } from '../redux/pictures/actions';

const Sort = () => {
  const dispatch = useDispatch();

  const debouncedSortHandler = useMemo(
    e =>
      debounce(e => {
        dispatch(sortPictures(e.target.value));
      }, 300),
    [dispatch]
  );

  return (
    <div>
      Sort by:
      <select onChange={debouncedSortHandler}>
        <option value='reset'>not sorted</option>
        <option value='likes'>likes</option>
        <option value='comments'>comments</option>
      </select>
    </div>
  );
};

export default Sort;
