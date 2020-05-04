import React, { Component, useEffect, useState, useRef } from 'react';

import ListImgs from './ListImgs';
import Pagination from './Pagination';

function Gallery({
  handleGetPhotosRequest,
  photos = { data: { result: [] } },
}) {
  const photoList =
    photos && photos.photos && photos.photos.data.result[0]
      ? photos.photos.data.result
      : [];

  let [size, setSize] = useState(10);
  let [pageNo, setPageNo] = useState(1);

  const handlePageChange = (e) => {
    setPageNo(e.target.value);
  };

  const handlePhotosPerPage = (e) => {
    setSize(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   //take values and make them part of the query string
  // };

  useEffect(() => {
    handleGetPhotosRequest(pageNo, size);
  }, [size, pageNo]);

  return (
    <div>
      <Pagination
        size={size}
        pageNo={pageNo}
        handlePageChange={handlePageChange}
        handlePhotosPerPage={handlePhotosPerPage}
      />
      <ListImgs photos={photoList} />
    </div>
  );
}

export default Gallery;
