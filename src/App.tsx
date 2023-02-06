import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Chip from "./components/library/visual/Chip";
import ChipList from "./components/library/visual/ChipList";

function App() {
  const [items, setItems] = useState(["Human", "Dead", "Alive", "Genderless"]);

  const handleRemove = (text: string) => {
    setItems((previousItems) => {
      return previousItems.filter((item) => item !== text);
    });
  };

  return (
    <div className="App">
      <div
        style={{
          width: "300px",
        }}
      >
        <ChipList items={items} onRemoveItem={handleRemove} />
      </div>
    </div>
  );
}

export default App;
