const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const Schema = mongoose.Schema;

const Token = new Schema({
  token: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    default: '',
  },
  expireAt: {
    type: Date,
    default: Date.now,
    index: { expires: "20m" },
  },
});

module.exports = mongoose.model("Token", Token);
