const Photo = require('../services').Photo;

async function renderPhotos(req, res, next) {
  try {
    const photos = await Photo.renderPhotos();
    res.send(photos);
  } catch (e) {
    console.error('photosController::renderPhotos');
    res.sendStatus(500);
  }
}

module.exports = { renderPhotos };
