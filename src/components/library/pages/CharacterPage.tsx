import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import "../visual/CardStyle.css";
import "./CharacterPage.css";
import Card, { CardProps } from "../visual/Card";
import { GET_CHARACTERS } from "../queries/queries";

interface Character {
  id: string;
  name: string;
  image: string;
  species: string;
}

interface CharactersData {
  characters: {
    info: {
      next: string;
    };
    results: Character[];
  };
}

export default function CharacterPage() {
  const [page, setPage] = useState(1);
  const { loading, error, data, fetchMore } = useQuery<CharactersData>(
    GET_CHARACTERS,
    {
      variables: { page: 1 },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleLoadMore = () => {
    fetchMore({
      variables: { page: page + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          characters: {
            info: fetchMoreResult.characters.info,
            results: [...prev.characters.results, ...fetchMoreResult.characters.results],
            __typename: prev.characters.__typename,
          },
        };
      },
    });
    setPage(page + 1);
  };

  return (
    <>
    <div className="imgcontainer">
      <img src="src/assets/hero.png" className="heroimg" alt="hero"></img>
    </div>
      <div className="grid">
        {data?.characters.results.map((character) => (
          <Link key={character.id} to={`/characters/${character.id}`}>
            <Card
              image={character.image}
              title={character.name}
              subtitle={character.species}
            />
          </Link>
        ))}
      </div>
      <div className="load-more-container">
        {data?.characters.info.next && (
          <button className="load-more button" onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </>
  );
}
