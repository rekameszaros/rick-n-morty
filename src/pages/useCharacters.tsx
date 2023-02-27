import Card from "../components/library/visual/Card";
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        species
        image
      }
    }
  }
`;

export const useCharacters = () => {
  const { error, data, loading } = useQuery(GET_CHARACTERS);

  if (loading) return { characters: [], loading: true };
  if (error) return { characters: [], loading: false };

  return { characters: data.characters.results, loading: false };
};
