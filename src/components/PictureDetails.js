import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PicDetails() {
  const [picture, setPicture] = useState(null);

  const { picId } = useParams();
  let history = useHistory();
  const pictures = useSelector(state => state.pictures.items);

  useEffect(() => {
    const currentPicture = pictures.find(item => {
      return item.id === Number(picId);
    });
    setPicture(currentPicture);
  }, [pictures, picId]);

  const createData = picture => {
    return Object.entries(picture).map(([key, value]) => (
      <p key={key} className='details'>
        <span className='detailsTitle'>{key}:</span> {value}
      </p>
    ));
  };

  return (
    <>
      {picture ? (
        <>
          <button
            onClick={() => {
              history.goBack();
            }}
          >
            Back
          </button>
          <div className='wrapper'>
            <div className='imgcover'>
              <img src={picture.largeImageURL} alt={picture.Invalue} />
            </div>

            <div className='detailswrap'> {createData(picture)}</div>
          </div>
        </>
      ) : (
        <p>no info</p>
      )}
    </>
  );
}
