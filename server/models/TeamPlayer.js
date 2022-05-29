const { Schema, model } = require("mongoose");

const teamPlayerSchema = new Schema({
  player: {
    type: Schema.Types.String,
    ref: "Player",
  },
  team: {
    type: Schema.Types.ObjectId,
    ref: "Team",
  },
  stat: {
    type: Schema.Types.ObjectId,
    ref: "Stat",
  },
});

const TeamPlayer = model("TeamPlayer", teamPlayerSchema);

module.exports = TeamPlayer;
