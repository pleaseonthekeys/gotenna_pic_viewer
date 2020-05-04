import * as GalleryActionTypes from '../actionTypes/galleryActionTypes';

export const fetchPhotos = () => ({
  type: GalleryActionTypes.FETCH_PHOTOS,
});

export const fetchPhotosSuccess = (data) => ({
  type: GalleryActionTypes.FETCH_PHOTOS_SUCCESS,
  payload: data,
});

export const fetchPhotosFailure = () => ({
  type: GalleryActionTypes.FETCH_PHOTOS_FAILURE,
});
