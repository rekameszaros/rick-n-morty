import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom'; // import useHistory
import './CharacterDetail.css';
import { GET_SINGLE_CHARACTER } from "../queries/queries";
import BackButton from './BackButton';
import  List  from "../visual/List";


interface ICharacter {
  id: string;
  name: string;
  status: string;
  image: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
}

interface ICharacterData {
  character: ICharacter;
}

interface ICharacterVariables {
  id: string;
}

function CharacterDetails() {
  const { id } = useParams<{ id?: string }>();
  const { loading, error, data } = useQuery<ICharacterData, ICharacterVariables>(
    GET_SINGLE_CHARACTER,
    {
      variables: { id: id ?? "" }, 
    }
  );
  const navigate = useNavigate(); 

  const handleBackButtonClick = () => {
    navigate('/');
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data?.character) return <p>No character found</p>;

  const status = data.character.status === "Alive" ? "alive" : "dead";

  const listProps = {
    specie: data.character.species,
    type: data.character.type,
    gender: data.character.gender,
    origin: data.character.origin.name,
    location: data.character.location.name,
  };

  return (
    <div className="character-details-container">
      <BackButton onClick={handleBackButtonClick} />
      <div className="character-image-container">
        <div className="overlay">
          <img src={data.character.image} alt={data.character.name} className={`character-image ${status === 'dead' ? 'black-and-white' : ''}`} />
        </div>
        <div className={`status-pill ${status}`}>{data.character.status}</div>
      </div>
      <div className="character-info">
        <h2>{data.character.name}</h2>
        <List {...listProps} />
      </div>
    </div>
  );
}

export default CharacterDetails;
