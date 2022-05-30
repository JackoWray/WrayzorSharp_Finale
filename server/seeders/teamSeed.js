const db = require("../config/connection");
const { Team } = require("../models");
const teamSeed = require("./teamSeed.json");

db.once("open", async () => {
  try {
    await Team.deleteMany({});

    const newTeam = new Team({
      teamName: teamSeed.teamName,
      // players: teamSeed.players,
      score: teamSeed.score,
      //   players: (await TeamPlayer.find()).map((p) => p._playerId),
    });

    await newTeam.save();

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
