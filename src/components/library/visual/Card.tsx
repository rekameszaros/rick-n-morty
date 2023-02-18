import React from 'react';
import './CardStyle.css';
import { useCharacters } from "./useCharacters";

/*
interface CardProps {
  image?: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

export default function Card({
    image = "./src/assets/ricknmorty.png",
    title,
    subtitle,
  }: CardProps) {


  return (
    <div className="cardComponent">
      <img src={image}/>
      <h2>{title}</h2>
     <p>{subtitle}</p>
    </div>
  );
};
*/

export default function Card() {

//now the hook is reusable
const {error, loading, data} = useCharacters();

  if (loading) return <div>spinner...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="Card">
      {data.characters.results.map((character) => {
        return (
          <div>
            <img scr={character.image} />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
}