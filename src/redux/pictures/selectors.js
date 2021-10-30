import { createSelector } from '@reduxjs/toolkit';

const getPictures = state => state.pictures.items;

const getFilter = state => {
  return state.pictures.filter;
};
const getSort = state => {
  return state.pictures.sort;
};

const getVisiblePictures = createSelector(
  [getFilter, getSort, getPictures],
  (filter, sorting, pictures) => {
    const Arr = pictures.filter(picture =>
      picture.tags.includes(filter.toLowerCase())
    );

    const filteredPic = [...Arr];

    const newArr = !sorting
      ? filteredPic || pictures
      : sorting === 'likes'
      ? Arr.sort(function (a, b) {
          return b.likes - a.likes;
        })
      : sorting === 'comments'
      ? Arr.sort(function (a, b) {
          return b.comments - a.comments;
        })
      : sorting === 'reset' && filteredPic;

    return newArr;
  }
);
const getPictureById = (state, pictureId) => {
  const pictures = getVisiblePictures(state);
  return pictures.find(item => item.id === pictureId);
};

const selectors = {
  getVisiblePictures,
  getPictureById,
  getPictures,
  getFilter
};
export default selectors;
