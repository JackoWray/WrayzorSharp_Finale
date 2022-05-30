import { gql } from "@apollo/client";

export const QUERY_PLAYERS = gql`
  query TeamPlayerOptions($homeClub: String!, $awayClub: String!) {
    teamPlayerOptions(homeClub: $homeClub, awayClub: $awayClub) {
      _id
      firstName
      lastName
      club
      salary
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      skills
    }
  }
`;

export const QUERY_TEAM = gql`
  query myquery($teamId: ID!) {
    teamById(teamId: $teamId) {
      players {
        _id
        player
      }
    }
  }
`;

export const QUERY_TEAM_PLAYERS_CDId = gql`
  query Query($playerId: String!) {
    playerByCDId(playerId: $playerId) {
      firstName
      lastName
      club
      salary
    }
  }
`;
