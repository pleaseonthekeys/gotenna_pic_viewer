import { connect } from 'react-redux';

import {
  getPhotos,
  getFilteredPhotos,
} from '../actionCreators/galleryActionCreators';
import Gallery from '../../components/gallery/Gallery';

const mapStateToProps = (store) => {
  return {
    photos: store.photos,
    filtered: store.filtered,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetPhotosRequest: (pageNo, size) => dispatch(getPhotos(pageNo, size)),
    handleGetPhotosFilteredRequest: (width, height) =>
      dispatch(getFilteredPhotos(width, height)),
  };
};

const GalleryContainer = connect(mapStateToProps, mapDispatchToProps)(Gallery);

export default GalleryContainer;
