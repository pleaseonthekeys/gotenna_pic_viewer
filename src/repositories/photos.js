const Photo = require('../models').Photo;

async function renderPhotos(query) {
  try {
    const totalCount = await Photo.Model.count({});
    const result = await Photo.Model.find({}, {}, query).lean().exec();
    let size = query.limit;
    let totalPages = Math.ceil(totalCount / size);
    return { result, totalPages };
  } catch (e) {
    console.error('photoRepository::renderPhotos', e);
    throw e;
  }
}

module.exports = { renderPhotos };
