import React from 'react';
import "./CharacterList.css";
import { useCharacters } from "../hooks/useCharacters";
import { useNavigate } from 'react-router-dom';

//error, loading, data resuable

export default function CharactersList() {

    const {error, loading, data} = useCharacters();
    const navigate = useNavigate()

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Something went wrong</div>;

    function handleClick (id: number) {
      navigate("/" +id)
    }

    return (
        <div className="CharacterList">
          {data.characters.results.map((character) => {
            return (
              <div onClick={ () => handleClick(character.id) }>
                <img src={character.image} />
                <h2>{character.name}</h2>
              </div>
            );
          })}
        </div>
      );
  
}

/*
  return (
        <div className="CharacterList">
          {data.characters.results.map((character) => {
            return (
              <Link to={`/${character.id}`}>
                <img src={character.image} />
                <h2>{character.name}</h2>
              </Link>
            );
          })}
        </div>
      );
*/