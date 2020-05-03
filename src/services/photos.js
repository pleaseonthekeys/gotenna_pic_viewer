const Photo = require('../repositories').Photo;

async function renderPhotos() {
  try {
    const result = await Photo.renderPhotos();
    return result;
  } catch (e) {
    console.error('photoService::renderPhotos', e);
    throw e;
  }
}

module.exports = { renderPhotos };
