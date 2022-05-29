const { AuthenticationError } = require("apollo-server-express");
const { User, Team, Player, TeamPlayer, Stat } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      if (context.user) {
        return User.find();
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    teamPlayerOptions: async (parent, { homeClub, awayClub }, context) => {
      if (context.user) {
        return Player.find({ club: [homeClub, awayClub] });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    teamById: async (parent, { teamId }, context) => {
      return await Team.findById(teamId).populate("players");
    },
    // getAllPlayers: async (parent, args, context) => {
    //   if (context.user) {
    //     return Player.find();
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
  },

  Mutation: {
    addUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No accounts with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },

    chooseGame: async (parent, { teamName }, context) => {
      if (context.user) {
        const team = new Team({
          teamName,
          players: [],
          salaryCap: 260000,
        });

        await team.save();

        return team;
        // return User.findOneAndUpdate(
        //   { _id: userId },
        //   {
        //     $addToSet: { players },
        //   },
        //   {
        //     new: true,
        //     runValidators: true,
        //   }
        // );
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    createTeam: async (parent, { teamName }, context) => {
      if (context.user) {
        const team = new Team({
          teamName,
          players: [],
          salaryCap: 260000,
        });

        await team.save();

        return team;
        // return User.findOneAndUpdate(
        //   { _id: userId },
        //   {
        //     $addToSet: { players },
        //   },
        //   {
        //     new: true,
        //     runValidators: true,
        //   }
        // );
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    editTeam: async (parent, { teamName, homeClub, awayClub }, context) => {
      if (context.user) {
        const team = new Team({
          teamName,
          players: [],
          salaryCap: 260000,
        });

        await team.save();

        return team;
        // return User.findOneAndUpdate(
        //   { _id: userId },
        //   {
        //     $addToSet: { players },
        //   },
        //   {
        //     new: true,
        //     runValidators: true,
        //   }
        // );
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    showDashboard: async (parent, context) => {
      if (context.user) {
        return team;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
