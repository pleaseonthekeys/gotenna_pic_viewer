import React from 'react';

import GalleryContainer from '../redux/containers/galleryContainers';

const App = () => {
  return (
    <div>
      <header>
        <h1 className="app-name">GoTenna Photo</h1>
      </header>
      <div className="parent-wrapper">
        <GalleryContainer />
      </div>
    </div>
  );
};

export default App;
