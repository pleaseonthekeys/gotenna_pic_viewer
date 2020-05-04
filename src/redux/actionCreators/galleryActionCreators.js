import axios from 'axios';
import '@babel/polyfill';

import {
  fetchPhotos,
  fetchPhotosSuccess,
  fetchPhotosFailure,
} from '../actions/galleryActions';

export const getPhotos = (pageNo, size) => {
  return (dispatch) => {
    dispatch(fetchPhotos());
    return axios
      .get(`http://localhost:3001/gotenna/photos?pageNo=${pageNo}&size=${size}`)
      .then(({ data }) => {
        dispatch(fetchPhotosSuccess({ data }));
      })
      .catch((e) => {
        dispatch(fetchPhotosFailure());
        console.error('galleryActionCreators::getPhotos', e);
        throw e;
      });
  };
};
