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

export const GET_ALL_LOCATIONS = gql`
query GetLocations($page: Int!) {
  locations(page: $page) {
    info {
      count
      pages
      next
      prev
    }
    results {
      id
      name
      dimension
      type
      created
    }
  }
}
`;
