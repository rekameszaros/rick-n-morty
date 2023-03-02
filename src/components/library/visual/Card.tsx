import React from 'react';
import './CardStyle.css';

export interface CardProps {
  image?: string;
  title: string;
  subtitle: string;
  created:string;
  onClick?: () => void;
}

export default function Card({
    image,
    title,
    subtitle,
    created,
  }: CardProps) {


  return (
    <div className="cardComponent">
      <img src={image}/>
      <h2>{title}</h2>
     <p>{subtitle}</p>
     <p>{created}</p>
    </div>
  );
};