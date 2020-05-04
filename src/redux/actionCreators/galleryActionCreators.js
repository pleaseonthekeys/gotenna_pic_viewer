import axios from 'axios';
import '@babel/polyfill';

import {
  fetchPhotos,
  fetchPhotosSuccess,
  fetchPhotosFailure,
  fetchPhotosFiltered,
  fetchPhotosFilteredSuccess,
  fetchPhotosFilteredFailure,
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

export const getFilteredPhotos = (width, height) => {
  return (dispatch) => {
    dispatch(fetchPhotosFiltered());
    return axios
      .get(`http://localhost:3001/gotenna/photos?w=${width}&h=${height}`)
      .then(({ data }) => {
        dispatch(fetchPhotosFilteredSuccess({ data }));
      })
      .catch((e) => {
        dispatch(fetchPhotosFilteredFailure());
        console.error('galleryActionCreators::getFilteredPhotos', e);
        throw e;
      });
  };
};
