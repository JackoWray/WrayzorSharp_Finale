const { Schema, model } = require("mongoose");

const statSchema = new Schema({
  activeFrom: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  spoil: {
    type: Number,
    required: true,
  },
  interceptPoss: {
    type: Number,
    required: true,
  },
  rebound: {
    type: Number,
    required: true,
  },
  effectiveDisp: {
    type: Number,
    required: true,
  },
  hitoutToAdv: {
    type: Number,
    required: true,
  },
  contMark: {
    type: Number,
    required: true,
  },
  cClearance: {
    type: Number,
    required: true,
  },
  sClearance: {
    type: Number,
    required: true,
  },
  entry: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  markInside: {
    type: Number,
    required: true,
  },
  tackle: {
    type: Number,
    required: true,
  },
});

const Stat = model("stat", statSchema);

module.exports = Stat;
