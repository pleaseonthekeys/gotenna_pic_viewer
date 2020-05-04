import { combineReducers } from 'redux';

import photos from './galleryReducers/photosReducer';
import filtered from './galleryReducers/getPhotosFiltered';

export default combineReducers({ photos, filtered });
