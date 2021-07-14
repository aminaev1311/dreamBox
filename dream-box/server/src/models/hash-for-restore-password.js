const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const Schema = mongoose.Schema;

const Hash = new Schema({
  hash: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now, expires: '2m' },
});

//Hash.index({ createdAt: 1 }, { expireAfterSeconds: 1 * 60 * 2 });

module.exports = mongoose.model("Hash", Hash);
