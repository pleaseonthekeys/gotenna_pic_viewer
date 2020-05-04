import React, { Component, useEffect, useState, useRef } from 'react';

import ListImgs from './ListImgs';

function Gallery({ handleGetPhotosRequest, photos = { data: [] } }) {
  const photoList =
    photos && photos.photos && photos.photos.data[0] ? photos.photos.data : [];

  useEffect(() => {
    handleGetPhotosRequest();
  }, []);

  return (
    <div>
      <ListImgs photos={photoList} />
    </div>
  );
}

export default Gallery;
