import "./App.css";
import logo from "../src/assets/images/wordle-logo-transparent-bkg.png";
import Grid from "./components/grid/Grid";
import Keyboard from "./components/keyboard/Keyboard";
import { useState } from "react";

export default function App() {
  const [currentGuess, setCurrentGuess] = useState("");

  const handleKeyPress = (key: string) => {
    setCurrentGuess((prev) => prev + key.toLowerCase());
  };

  return (
    <>
      <img src={logo} alt="Wordle logo" />
      <h1>Hello Wordle!</h1>
      <div className="game-container">
        <Grid currentGuess={currentGuess} />
        <Keyboard onKeyPress={handleKeyPress} />
      </div>
    </>
  );
}
