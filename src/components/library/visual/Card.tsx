import React from 'react';
import './CardStyle.css';

//The CardProps interface defines the shape of the props object that can be passed to the component. It specifies that the image prop is optional and can be a string, the title prop is required and must be a string, the subtitle prop is required and must be a string, and the onClick prop is optional.

interface CardProps {
  image?: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

//Inside the component, the image, title, and subtitle props are destructured from the CardProps object and used in the JSX code to render an image, a title, and a subtitle. If the image prop is not provided, it defaults to the Rick and Morty image located at ./src/assets/ricknmorty.png.

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

