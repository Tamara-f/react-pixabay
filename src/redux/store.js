import { configureStore } from '@reduxjs/toolkit';

import pictureReducer from './pictures/reducer';

const store = configureStore({
  reducer: { pictures: pictureReducer }
});

export default store;
