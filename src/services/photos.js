const Photo = require('../repositories').Photo;

async function renderPhotos(query) {
  try {
    const result = await Photo.renderPhotos(query);
    return result;
  } catch (e) {
    console.error('photoService::renderPhotos', e);
    throw e;
  }
}

module.exports = { renderPhotos };
