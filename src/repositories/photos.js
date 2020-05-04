const Photo = require('../models').Photo.Model;

async function renderPhotos(query) {
  try {
    const totalCount = await Photo.count({});
    const result1 = await Photo.find({}, {}, query).lean().exec();

    let result = result1.map((pic) => {
      return {
        ...pic,
        width: pic.url.split('/')[5],
        height: pic.url.split('/')[6],
      };
    });

    let size = query.limit;
    let totalPages = Math.ceil(totalCount / size);
    return { result, totalPages };
  } catch (e) {
    console.error('photoRepository::renderPhotos', e);
    throw e;
  }
}

module.exports = { renderPhotos };
