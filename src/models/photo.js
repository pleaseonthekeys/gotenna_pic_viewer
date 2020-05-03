const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    url: { type: String, index: true },
  },
  {
    timestamps: true,
  }
);
schema.index({ url: 1 }, { unique: true, background: true });

module.exports = mongoose.model('Photos', schema);
