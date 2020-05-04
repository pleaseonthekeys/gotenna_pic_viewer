const Photo = require('../services').Photo;

async function renderPhotos(req, res, next) {
  var pageNo = parseInt(req.query.pageNo);
  var size = parseInt(req.query.size);
  var query = {};
  query.skip = size * (pageNo - 1);
  query.limit = size;
  try {
    const photos = await Photo.renderPhotos(query);
    res.send(photos);
  } catch (e) {
    console.error('photosController::renderPhotos');
    res.sendStatus(500);
  }
}

module.exports = { renderPhotos };
