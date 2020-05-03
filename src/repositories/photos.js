const Photo = require('../models').Photo;

async function renderPhotos(photo) {
  try {
    const result = await Photo.Model.find().lean().exec();
    return result;
  } catch (e) {
    console.error('photoRepository::renderPhotos', e);
    throw e;
  }
}

module.exports = { renderPhotos };
