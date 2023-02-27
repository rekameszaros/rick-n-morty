import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/library/visual/Card";
import "../src/pages/Navigation.css";
import Navigation from "./pages/Navigation";



function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Card
        image="https://via.placeholder.com/150"
        title="Title"
        subtitle="Subtitle"
      />
    </div>
  );
}
/*
import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/library/visual/Card";
import "../src/pages/Navigation.css";
import Navigation from "./pages/Navigation";
import { useCharacters } from "./pages/useCharacters";

function App() {
  const { error, loading, data } = useCharacters();

  if (loading) return <div>spinner...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="App">
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
}
*/
export default App;
