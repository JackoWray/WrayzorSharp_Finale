import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser(
    $firstName: String!
    $email: String!
    $password: String!
    $lastName: String
  ) {
    addUser(
      firstName: $firstName
      email: $email
      password: $password
      lastName: $lastName
    ) {
      token
      user {
        firstName
        email
        password
        lastName
      }
    }
  }
`;

export const ADD_SKILL = gql`
  mutation addSkill($profileId: ID!, $skill: String!) {
    addSkill(profileId: $profileId, skill: $skill) {
      _id
      name
      skills
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
        password
      }
    }
  }
`;

export const REMOVE_SKILL = gql`
  mutation removeSkill($skill: String!) {
    removeSkill(skill: $skill) {
      _id
      name
      skills
    }
  }
`;
