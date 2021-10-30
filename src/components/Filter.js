import { useRef, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import { changeFilter } from '../redux/pictures/actions';

const Filter = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const debouncedHandler = useMemo(
    () =>
      debounce(() => {
        dispatch(changeFilter(inputRef.current.value));
      }, 300),
    [dispatch]
  );

  return (
    <div className='PicFilter'>
      <span className='PicFilter__label'>Filter by tag:</span>
      <input ref={inputRef} type='text' onKeyUp={debouncedHandler} />
    </div>
  );
};

export default Filter;
