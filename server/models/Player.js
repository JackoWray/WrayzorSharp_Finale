const { Schema, model } = require("mongoose");

const playerSchema = new Schema({
  player: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  club: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
    min: 5000,
  },
  positAvgs: {
    type: Object,
  },
  score: {
    type: Number,
  },
});

const Player = model("player", playerSchema);

module.exports = Player;
