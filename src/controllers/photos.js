const Photo = require('../services').Photo;

async function renderPhotos(req, res, next) {
  const pageNo = parseInt(req.query.pageNo);
  const size = parseInt(req.query.size);
  let width = req.query.w || null;
  let height = req.query.h || null;
  const query = {};
  query.skip = size * (pageNo - 1);
  query.limit = size;
  try {
    const photos = await Photo.renderPhotos(query);
    if (width && height) {
      let filtered = photos.result.filter((photo) => {
        return photo.width === width && photo.height === height;
      });
      res.send(filtered);
    } else {
      res.send(photos);
    }
  } catch (e) {
    console.error('photosController::renderPhotos', e);
    res.sendStatus(500);
  }
}

module.exports = { renderPhotos };
