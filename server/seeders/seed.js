const db = require("../config/connection");
const { User, Player, Stat, Team, TeamPlayer } = require("../models");
const playerSeeds = require("./playerSeeds.json");
const teamSeed = require("./teamSeed.json");
const teamPlayerSeed = require("./teamPlayerSeeds.json");
const { isObjectIdOrHexString } = require("mongoose");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Player.deleteMany({});
    await TeamPlayer.deleteMany({});

    // await Profile.create(profileSeeds);

    for (let i = 0; i < playerSeeds.length; i++) {
      if (playerSeeds[i].totals.matchesPlayed === 0) {
        const posAvg = 0;
        const posStDev = 0;

        const newPlayer = new Player({
          player: playerSeeds[i].playerId,
          firstName: playerSeeds[i].playerDetails.givenName,
          lastName: playerSeeds[i].playerDetails.surname,
          club: playerSeeds[i].team.teamName,
          salary: 5000,
        });

        await newPlayer.save();
      } else {
        const fullBack =
          Math.round(
            ((3 * playerSeeds[i].totals.spoils +
              2 * playerSeeds[i].totals.interceptMarks +
              playerSeeds[i].totals.rebound50s) /
              playerSeeds[i].totals.matchesPlayed) *
              1000
          ) / 1000;
        const backPocket =
          Math.round(
            ((3 * playerSeeds[i].totals.intercepts +
              2 * playerSeeds[i].totals.rebound50s +
              playerSeeds[i].totals.effectiveDisposals) /
              playerSeeds[i].totals.matchesPlayed) *
              1000
          ) / 1000;
        const centreHalfBack =
          Math.round(
            ((3 * playerSeeds[i].totals.interceptMarks +
              2 * playerSeeds[i].totals.rebound50s +
              playerSeeds[i].totals.spoils) /
              playerSeeds[i].totals.matchesPlayed) *
              1000
          ) / 1000;
        const halfBackFlank =
          Math.round(
            ((3 * playerSeeds[i].totals.rebound50s +
              2 * playerSeeds[i].totals.intercepts +
              playerSeeds[i].totals.effectiveDisposals) /
              playerSeeds[i].totals.matchesPlayed) *
              1000
          ) / 1000;
        const ruck =
          Math.round(
            ((3 * playerSeeds[i].totals.hitoutsToAdvantage +
              2 * playerSeeds[i].totals.contestedMarks +
              playerSeeds[i].totals.interceptMarks) /
              playerSeeds[i].totals.matchesPlayed) *
              1000
          ) / 1000;
        const centre =
          Math.round(
            ((3 * playerSeeds[i].totals.centreClearances +
              2 * playerSeeds[i].totals.inside50s +
              playerSeeds[i].totals.effectiveDisposals) /
              playerSeeds[i].totals.matchesPlayed) *
              1000
          ) / 1000;
        const rover =
          Math.round(
            ((3 * playerSeeds[i].totals.stoppageClearances +
              2 * playerSeeds[i].totals.interceptMarks +
              playerSeeds[i].totals.tackles) /
              playerSeeds[i].totals.matchesPlayed) *
              1000
          ) / 1000;
        const wing =
          Math.round(
            ((3 * playerSeeds[i].totals.inside50s +
              2 * playerSeeds[i].totals.rebound50s +
              playerSeeds[i].totals.effectiveDisposals) /
              playerSeeds[i].totals.matchesPlayed) *
              1000
          ) / 1000;
        const centreHalfFwd =
          Math.round(
            ((3 *
              (6 * playerSeeds[i].totals.goals +
                playerSeeds[i].totals.behinds) +
              2 * playerSeeds[i].totals.marksInside50 +
              playerSeeds[i].totals.inside50s) /
              playerSeeds[i].totals.matchesPlayed) *
              1000
          ) / 1000;
        const halfFwdFlank =
          Math.round(
            ((3 * playerSeeds[i].totals.inside50s +
              playerSeeds[i].totals.effectiveDisposals +
              2 *
                (6 * playerSeeds[i].totals.goals +
                  playerSeeds[i].totals.behinds)) /
              playerSeeds[i].totals.matchesPlayed) *
              1000
          ) / 1000;
        const fullFwd =
          Math.round(
            ((3 *
              (6 * playerSeeds[i].totals.goals +
                playerSeeds[i].totals.behinds) +
              2 * playerSeeds[i].totals.marksInside50 +
              playerSeeds[i].totals.contestedMarks) /
              playerSeeds[i].totals.matchesPlayed) *
              1000
          ) / 1000;
        const fwdPocket =
          Math.round(
            ((3 * playerSeeds[i].totals.f50GroundBallGets +
              1 *
                (6 * playerSeeds[i].totals.goals +
                  playerSeeds[i].totals.behinds) +
              2 * playerSeeds[i].totals.tacklesInside50) /
              playerSeeds[i].totals.matchesPlayed) *
              1000
          ) / 1000;

        const posAvg =
          (fullBack +
            backPocket +
            centreHalfBack +
            halfBackFlank +
            ruck +
            centre +
            rover +
            wing +
            centreHalfFwd +
            halfFwdFlank +
            fullFwd +
            fwdPocket) /
          12;

        const posStDev = Math.sqrt(
          (Math.pow(fullBack - posAvg, 2) +
            Math.pow(backPocket - posAvg, 2) +
            Math.pow(centreHalfBack - posAvg, 2) +
            Math.pow(halfBackFlank - posAvg, 2) +
            Math.pow(ruck - posAvg, 2) +
            Math.pow(centre - posAvg, 2) +
            Math.pow(rover - posAvg, 2) +
            Math.pow(wing - posAvg, 2) +
            Math.pow(centreHalfFwd - posAvg, 2) +
            Math.pow(halfFwdFlank - posAvg, 2) +
            Math.pow(fullFwd - posAvg, 2) +
            Math.pow(fwdPocket - posAvg, 2)) /
            12
        );

        const newPlayer = new Player({
          player: playerSeeds[i].playerId,
          firstName: playerSeeds[i].playerDetails.givenName,
          lastName: playerSeeds[i].playerDetails.surname,
          club: playerSeeds[i].team.teamName,
          salary: Math.max(
            Math.round(((posAvg + 1.036 * posStDev) * 931) / 100) * 100,
            5000
          ),
          positAvgs: {
            fullBack,
            backPocket,
            centreHalfBack,
            halfBackFlank,
            ruck,
            centre,
            rover,
            wing,
            centreHalfFwd,
            halfFwdFlank,
            fullFwd,
            fwdPocket,
          },
        });

        await newPlayer.save();
      }
    }

    const newUser = new User({
      firstName: "Jackson",
      lastName: "Wray",
      email: "jackson.wray19@outlook.com",
      password: "password123",
      teams: [],
    });

    await newUser.save();

    for (i = 0; i < 18; i++) {
      const newTeamPlayer = new TeamPlayer({
        player: teamPlayerSeed[i].player,
        team: "62943a624b03c99d2048b60e",
        score: null,
      });

      await newTeamPlayer.save();
    }

    // const newTeam = new Team({
    //   teamName: teamSeed.teamName,
    //   players: teamSeed.players,
    //   score: teamSeed.score,
    //   players: (await TeamPlayer.find()).map((p) => p._playerId),
    // });

    // await newTeam.save();
    // const playerId = (await TeamPlayer.find({})).map((p) => p._id);
    // console.log(playerId, typeof playerId);

    // const playerIDsOnly = playerId.map((p) => p.slice(11, -2));
    // console.log(playerIDsOnly);

    await Team.findByIdAndUpdate("62943a624b03c99d2048b60e", {
      $set: {
        players: [],
      },
    });

    await Team.findByIdAndUpdate("62943a624b03c99d2048b60e", {
      $push: {
        players: { $each: (await TeamPlayer.find({})).map((p) => p._id) },
      },
    });

    const team2Players = await Team.find({}).populate("players");
    console.log(team2Players);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
