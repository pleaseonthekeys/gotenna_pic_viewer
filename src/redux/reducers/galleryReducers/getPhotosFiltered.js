import Redux from 'redux';
import * as GalleryActionTypes from '../../actionTypes/galleryActionTypes';

const getPhotosFilteredReducer = (state = {}, action) => {
  switch (action.type) {
    case GalleryActionTypes.FETCH_PHOTOS_FILTERED: {
      return { ...state, loading: true };
    }
    case GalleryActionTypes.FETCH_PHOTOS_FILTERED_SUCCESS: {
      return { ...state, loading: false, filtered: action.payload };
    }
    case GalleryActionTypes.FETCH_PHOTOS_FILTERED_FAILURE: {
      return { ...state, loading: false };
    }
    default:
      return state;
  }
};

export default getPhotosFilteredReducer;
