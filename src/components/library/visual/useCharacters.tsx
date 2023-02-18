/* back
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

*/

import { useQuery, gql } from "@apollo/client";
import Card from "./Card";

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

export const useCharacters = () => {
  const { error, data, loading } = useQuery(GET_CHARACTERS);

  if (loading) return <div>spinner...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="Card">
      {data.characters.results.map((character) => {
        return (
          <Card
            key={character.id}
            image={character.image}
            title={character.name}
            subtitle={`ID: ${character.id}`}
          />
        );
      })}
    </div>
  );
};
