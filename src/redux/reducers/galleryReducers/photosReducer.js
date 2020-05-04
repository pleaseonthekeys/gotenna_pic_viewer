import Redux from 'redux';
import * as GalleryActionTypes from '../../actionTypes/galleryActionTypes';

const getPhotosReducer = (state = {}, action) => {
  switch (action.type) {
    case GalleryActionTypes.FETCH_PHOTOS: {
      return { ...state, loading: true };
    }
    case GalleryActionTypes.FETCH_PHOTOS_SUCCESS: {
      return { ...state, loading: false, photos: action.payload };
    }
    case GalleryActionTypes.FETCH_PHOTOS_FAILURE: {
      return { ...state, loading: false };
    }
    default:
      return state;
  }
};

export default getPhotosReducer;
