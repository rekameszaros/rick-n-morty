import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/library/visual/Card";
import { useCharacters } from "./components/library/visual/useCharacters";

/*original
function App() {
  return <div className="App">
    <Card/>
  </div>;
}


export default App;
*/


function App() {
  return (
    <div className="App">
      {useCharacters()}
    </div>
  );
}

export default App;