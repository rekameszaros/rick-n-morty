import { useQuery, gql } from "@apollo/client";

//Creating query hook

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

//Execute the query we want(characters). 
export const useCharacters = () => {
    const { error, data, loading } = useQuery(GET_CHARACTERS);

    return{
        error,
        data,
        loading,
    };
};