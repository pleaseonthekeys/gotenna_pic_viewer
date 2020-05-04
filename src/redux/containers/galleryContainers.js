import { connect } from 'react-redux';

import { getPhotos } from '../actionCreators/galleryActionCreators';
import Gallery from '../../components/gallery/Gallery';

const mapStateToProps = (store) => {
  return {
    photos: store.photos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetPhotosRequest: () => dispatch(getPhotos()),
  };
};

const GalleryContainer = connect(mapStateToProps, mapDispatchToProps)(Gallery);

export default GalleryContainer;
