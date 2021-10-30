import React from 'react';
import { useSelector } from 'react-redux';

import selectors from '../redux/pictures/selectors';
import PictureItem from './PictureItem';
import Filter from './Filter';
import Sort from './Sort';

const PictureList = () => {
  const images = useSelector(selectors.getVisiblePictures);

  return (
    <>
      <div className='filtersCover'>
        <Sort />
        <Filter />
      </div>
      <ul className='pictureList'>
        {images.map(
          ({
            id,
            webformatURL,
            largeImageURL,
            value,
            likes,
            comments,
            tags
          }) => (
            <PictureItem
              key={id}
              id={id}
              webformatURL={webformatURL}
              Invalue={value}
              largeImageURL={largeImageURL}
              likes={likes}
              comments={comments}
              tags={tags}
            />
          )
        )}
      </ul>
    </>
  );
};

export default PictureList;
