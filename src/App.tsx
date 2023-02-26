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

export default App;
