const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    url: { type: String, index: true },
    width: String,
    height: String,
  },
  {
    timestamps: true,
  }
);
schema.index({ url: 1 }, { unique: true, background: true });

const Model = mongoose.model('Photos', schema);
module.exports = { Model };
