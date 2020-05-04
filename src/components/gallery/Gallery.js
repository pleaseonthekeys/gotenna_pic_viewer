import React, { Component, useEffect, useState, useRef } from 'react';

import ListImgs from './ListImgs';
import Pagination from './Pagination';
import Filter from './Filter';

function Gallery({
  handleGetPhotosRequest,
  handleGetPhotosFilteredRequest,
  photos = { data: { result: [] } },
  filtered = { data: [] },
}) {
  const photoList =
    photos && photos.photos && photos.photos.data.result[0]
      ? photos.photos.data.result
      : [];
  const filteredList =
    filtered && filtered.filtered && filtered.filtered.data[0]
      ? filtered.filtered.data
      : [];

  let [photosFiltered, setPhotoFilter] = useState([]);
  let [isFiltered, setIsFiltered] = useState(false);
  let [size, setSize] = useState(50);
  let [pageNo, setPageNo] = useState(1);
  let [width, setWidth] = useState(null);
  let [height, setHeight] = useState(null);

  const handleWidthFilter = (e) => {
    setWidth(e.target.value);
  };

  const handleHeightFilter = (e) => {
    setHeight(e.target.value);
  };

  const handleSubmitFilter = async (e) => {
    e.preventDefault();
    setIsFiltered(true);
    let filteredPhotos = await handleGetPhotosFilteredRequest(width, height);
    setPhotoFilter(filtered);
  };

  const handlePageChange = (e) => {
    setPageNo(e.target.value);
  };

  const handlePhotosPerPage = (e) => {
    setSize(e.target.value);
  };

  useEffect(() => {
    handleGetPhotosRequest(pageNo, size);
  }, [size, pageNo, width, height]);

  return (
    <div>
      <Filter
        handleHeightFilter={handleHeightFilter}
        handleWidthFilter={handleWidthFilter}
        handleSubmitFilter={handleSubmitFilter}
        width={width}
        height={height}
      />
      <Pagination
        size={size}
        pageNo={pageNo}
        handlePageChange={handlePageChange}
        handlePhotosPerPage={handlePhotosPerPage}
      />
      <ListImgs photos={isFiltered ? filteredList : photoList} />
    </div>
  );
}

export default Gallery;
