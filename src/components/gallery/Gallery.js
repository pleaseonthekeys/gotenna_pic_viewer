import React, { Component, useEffect, useState, useRef } from 'react';

function Gallery({ handleGetPhotosRequest, photos = { data: [] } }) {
  const testing =
    photos && photos.photos && photos.photos.data[0]
      ? photos.photos.data[0].url
      : 'nope';

  useEffect(() => {
    handleGetPhotosRequest();
  }, []);

  return (
    <div>
      <img src={testing}></img>
    </div>
  );
}

export default Gallery;
