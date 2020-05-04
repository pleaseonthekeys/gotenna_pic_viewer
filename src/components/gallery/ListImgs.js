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
    <div>
      <div className="left">
        <button onClick={handleGrayScale}>
          {grayscale ? 'Show Color' : 'Show Black and White'}
        </button>
      </div>
      <div className="parent">{list}</div>
    </div>
  );
}

export default ListImgs;
