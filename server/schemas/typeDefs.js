const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String
    email: String!
    password: String!
  }

  type Team {
    _id: ID!
    activeFrom: Float!
    teamName: String!
    players: [TeamPlayer]!
    salaryCap: Int!
    points: Int!
  }

  type Player {
    _id: ID!
    playerId: String!
    firstName: String!
    lastName: String!
    club: String!
    salary: Int!
  }

  type TeamPlayer {
    _id: ID!
    player_playerId: Player!
    team: Team!
    stat: Stat!
  }

  type Stat {
    _id: ID!
    activeFrom: Float!
    spoil: Int!
    interceptPoss: Int!
    rebound: Int!
    effectiveDisp: Int!
    hitoutToAdv: Int!
    contMark: Int!
    cClearance: Int!
    sClearance: Int!
    entry: Int!
    score: Int!
    markInside: Int!
    tackle: Int!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
    teamById(teamId: ID!): Team
    teamPlayerOptions(homeClub: String!, awayClub: String!): [Player]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth

    chooseGame(teAMName: String!): String!
    createTeam(homeClub: String!, awayClub: String!): Team
    editTeam(homeClub: String!, awayClub: String!): Team
    showDashboard: [Team]
  }
`;

module.exports = typeDefs;
