import { useState, useEffect, useCallback, useMemo } from "react";
import { WORDS } from "./data/words";
import { evaluateGuess } from "./utils/wordUtils";
import Grid from "./components/grid/Grid";
import Keyboard from "./components/keyboard/Keyboard";
import "./App.css";
import logo from "/images/wordle-no-bkg.png";
import shuffleArray from "./utils/shuffleArray";

export default function App() {
  const [target, setTarget] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [usedKeys, setUsedKeys] = useState<Record<string, string>>({});
  const shuffledWords = useMemo(() => shuffleArray([...WORDS]), []);

  const startNewGame = useCallback(() => {
    setTarget(shuffledWords[0]);
    setGuesses([]);
    setCurrentGuess("");
    setGameOver(false);
    setUsedKeys({});
  }, [shuffledWords]);

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  const handleKeyPress = (key: string) => {
    if (gameOver) return;

    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
    } else if (key === "Enter") {
      if (currentGuess.length === 5) {
        const newGuesses = [...guesses, currentGuess];
        setGuesses(newGuesses);
        updateUsedKeys(currentGuess);

        if (currentGuess.toLowerCase() === target.toLowerCase()) {
          setGameOver(true);
        } else if (newGuesses.length >= 5) {
          setGameOver(true);
        }

        setCurrentGuess("");
      }
    } else if (/^[A-Z]$/.test(key) && currentGuess.length < 5) {
      setCurrentGuess((prev) => prev + key.toLowerCase());
    }
  };

  const updateUsedKeys = (guess: string) => {
    const evaluation = evaluateGuess(guess, target);
    const newUsedKeys = { ...usedKeys };

    guess.split("").forEach((letter, i) => {
      const letterLower = letter.toLowerCase();
      const result = evaluation[i];

      if (result === "correct") {
        newUsedKeys[letterLower] = "correct";
      } else if (
        result === "present" &&
        newUsedKeys[letterLower] !== "correct"
      ) {
        newUsedKeys[letterLower] = "present";
      } else if (
        !newUsedKeys[letterLower] ||
        (newUsedKeys[letterLower] !== "correct" &&
          newUsedKeys[letterLower] !== "present")
      ) {
        newUsedKeys[letterLower] = "absent";
      }
    });

    setUsedKeys(newUsedKeys);
  };

  return (
    <div className="app">
      <img id="logo" src={logo} alt="wordle logo" />
      <div className="game-container">
        <Grid guesses={guesses} target={target} currentGuess={currentGuess} />
        <Keyboard onKeyPress={handleKeyPress} usedKeys={usedKeys} />
      </div>

      {gameOver && (
        <div className="game-over">
          {guesses.some(
            (guess) => guess.toLowerCase() === target.toLowerCase()
          ) ? (
            <div id="announcement">🎉 You won!</div>
          ) : (
            <div id="announcement">😞 Game Over! Word was: {target}</div>
          )}
          <button className="game-over button" onClick={startNewGame}>
            Start New Game
          </button>
        </div>
      )}
    </div>
  );
}
