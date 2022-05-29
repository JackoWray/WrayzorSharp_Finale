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
  query TeamById($teamId: ID!) {
    teamById(teamId: $teamId) {
      _id
      activeFrom
      teamName
      players {
        _id
        player {
          firstName
          lastName
        }
      }
      salaryCap
      points
    }
  }
`;
