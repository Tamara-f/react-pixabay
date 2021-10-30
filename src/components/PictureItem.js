import {useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import { changeFilter } from '../redux/pictures/actions';

import '../styles/Picture.scss';

const PictureItem = props => {
  const dispatch = useDispatch();

  const debouncedHandler = useMemo(
    e =>
      debounce(e => {
        dispatch(changeFilter(e.target.textContent));
      }, 300),
    [dispatch]
  );
  const getTags = tags => {
    const Arr = tags.split(',');
    const tagsArr = Arr.map(t => {
      return (
        <p key={t} className='tag' onDoubleClick={debouncedHandler}>
          {t}
        </p>
      );
    });
    return tagsArr;
  };

  return (
    <li className='PictureItem'>
      <Link to={`/${props.id}`}>
        <div className='actions'>
          <p className='likes'>
            <ThumbUpIcon />
            {props.likes}
          </p>
          <p className='comments'>
            <ChatBubbleIcon />
            {props.comments}
          </p>
        </div>
        <img src={props.webformatURL} alt={props.Invalue} />
      </Link>
      <div className='tagsWrapper'>{getTags(props.tags)}</div>
    </li>
  );
};
export default PictureItem;
