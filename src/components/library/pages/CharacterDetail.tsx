import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import './CharacterDetail.css';
import { GET_SINGLE_CHARACTER } from "../queries/queries";

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
      variables: { id: id ?? "" }, // Use empty string as default value
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data?.character) return <p>No character found</p>;

  const status = data.character.status === "Alive" ? "alive" : "dead";

  return (
    <div className="character-details-container">
      <div className="character-image-container">
        <img src={data.character.image} alt={data.character.name} className="character-image" />
        <div className={`status-pill ${status}`}>{data.character.status}</div>
      </div>
      <div className="character-info">
        <h2>{data.character.name}</h2>
        <div className="character-details-form">
          <div className="form-row">
            <span className="form-label">Species:</span>
            <span className="form-value">{data.character.species}</span>
          </div>
          <div className="form-row">
            <span className="form-label">Type:</span>
            <span className="form-value">{data.character.type || '-'}</span>
          </div>
          <div className="form-row">
            <span className="form-label">Gender:</span>
            <span className="form-value">{data.character.gender}</span>
          </div>
          <div className="form-row">
            <span className="form-label">Origin:</span>
            <span className="form-value">{data.character.origin.name}</span>
          </div>
          <div className="form-row">
            <span className="form-label">Location:</span>
            <span className="form-value">{data.character.location.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetails;
