import React from "react";
import { useNavigate } from "react-router-dom";
import './BackButton.css'

export default function BackButton() {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/');
  };

  return (
    <button onClick={handleBackButtonClick} className="BackButton">
      Go Back
    </button>
  );
}
