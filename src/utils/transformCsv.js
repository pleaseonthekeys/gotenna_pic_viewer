const path = require('path');

const readFile = require('../../readfile');

//images
readFile({
  filepath: path.resolve(
    __dirname,
    '../../../../../../Downloads/gotenna_imgs.csv'
  ),
  newFilepath: path.resolve(__dirname, './photos.csv'),
  columns: ['url'],
  transformData: (parsed) => ({
    url: String(parsed.url),
  }),
});
