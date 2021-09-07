const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Goal = new Schema({
  ditails: {
    type: String,
    default: ''
  },
  metrics: {
    type: Object,
    default: {}
  },
  name: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    default: ''
  },
  tactics: {
    type: Array,
    default: []
  },
  theme: {
    type: String,
    default: ''
  },
  userId: {
    type: String,
    default: ''
  },
});


module.exports = mongoose.model("Goal", Goal);
