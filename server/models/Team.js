const { Schema, model } = require("mongoose");

const teamSchema = new Schema({
  activeFrom: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  teamName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  players: [
    {
      type: Schema.Types.ObjectId,
      ref: "TeamPlayer",
    },
  ],
  score: {
    type: Number,
  },
});

const Team = model("Team", teamSchema);

module.exports = Team;
