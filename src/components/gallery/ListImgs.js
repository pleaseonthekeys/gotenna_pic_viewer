import React, { Component, useEffect, useState, useRef } from 'react';

function ListImgs({ photos }) {
  const [grayscale, setGrayscale] = useState(false);

  const handleGrayScale = (e) => {
    setGrayscale(!grayscale);
  };

  let filter = grayscale ? 'grayscale(100%)' : 'none';
  const list = photos.map((img) => {
    return (
      <div className="child-wrapper">
        <div className="child">
          <img src={img.url} style={{ filter }}></img>
        </div>
      </div>
    );
  });

  return (
    <>
      <button onClick={handleGrayScale}>
        {grayscale ? 'Show Color' : 'Show Black and White'}
      </button>

      <div className="parent">{list}</div>
    </>
  );
}

export default ListImgs;
