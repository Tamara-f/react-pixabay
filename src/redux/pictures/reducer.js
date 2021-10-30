import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { fetchPicturesSuccess, changeFilter, sortPictures } from './actions';

const items = createReducer([], {
  [fetchPicturesSuccess]: (state, action) => action.payload
});

const sort = createReducer('', {
  [sortPictures]: (_, { payload }) => payload
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload
});

export default combineReducers({
  items,
  filter,
  sort
});
