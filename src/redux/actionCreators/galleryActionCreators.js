import axios from 'axios';
import '@babel/polyfill';

import {
  fetchPhotos,
  fetchPhotosSuccess,
  fetchPhotosFailure,
} from '../actions/galleryActions';

export const getPhotos = () => {
  return (dispatch) => {
    dispatch(fetchPhotos());
    console.log('actioncreator');
    return axios
      .get(`http://localhost:3001/gotenna/photos`)
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
