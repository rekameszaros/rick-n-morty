import { gql } from '@apollo/client';

export const GET_SINGLE_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      image
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
    }
  }
`;

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        next
      }
      results {
        id
        name
        image
        species
      }
    }
  }
`;
