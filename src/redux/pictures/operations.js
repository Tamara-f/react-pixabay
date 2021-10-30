import axios from 'axios';

import {
  fetchPicturesRequest,
  fetchPicturesError,
  fetchPicturesSuccess
} from './actions';

const API_KEY = '17615021-9599c8e133abdd89b923fc662';
axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchPictures = () => dispatch => {
  dispatch(fetchPicturesRequest());
  axios
    .get(`/?&page=1&key=${API_KEY}&q=cats&image_type=all&per_page=100`)
    .then(response => dispatch(fetchPicturesSuccess(response.data.hits)))
    .catch(error => dispatch(fetchPicturesError(error)));
};

export default fetchPictures;
