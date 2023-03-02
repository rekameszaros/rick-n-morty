import React from 'react';
import './CardStyle.css';

export interface CardProps {
  image?: string;
  title: string;
  subtitle: string;
  created:string;
  residents:string[];
  onClick?: () => void;
}

export default function Card({
    image,
    title,
    subtitle,
    created,
    residents,
  }: CardProps) {


    return (
      <div className="cardComponent">
        <img src={image}/>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <p>{created}</p>
        {residents && residents.length > 0 && (
          <div>
            <h3>Residents:</h3>
            <ul>
              {residents.map((resident) => (
                <li key={resident}>{resident}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }