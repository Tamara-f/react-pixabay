import { createAction } from '@reduxjs/toolkit';

export const fetchPicturesRequest = createAction('pictures/fetchRequest');
export const fetchPicturesSuccess = createAction('pictures/fetchSuccess');
export const fetchPicturesError = createAction('pictures/fetchError');

export const sortPictures = createAction('pictures/sortPictures');

export const changeFilter = createAction('pictures/changeFilter');
