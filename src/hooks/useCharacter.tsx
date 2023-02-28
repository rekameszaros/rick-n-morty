import { useQuery, gql } from "@apollo/client";

//Creating query hook

const GET_CHARACTER = gql`
 query GetCharacter($id: ID!){
  character(id: $id) {
      image
      name
      id
      episode {
        name
        episode
      }
    }
}
`;

export const useCharacter = (id) => {
    const { error, data, loading } = useQuery(GET_CHARACTER, {
        variables: {
            id
        }
    });
    return {
        error,
        data,
        loading,
    };
};