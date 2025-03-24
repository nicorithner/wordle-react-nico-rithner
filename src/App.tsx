import { useState, useEffect, useCallback, useMemo } from "react";
import { WORDS } from "./data/words";
import { evaluateGuess } from "./utils/wordUtils";
import Grid from "./components/grid/Grid";
import Keyboard from "./components/keyboard/Keyboard";
import Welcome from "./components/welcome/Welcome";
import GameOver from "./components/gameover/GameOver";
import "./App.css";
import shuffleArray from "./utils/shuffleArray";
import WordleLogo from "./components/wordleLogo/WordleLogo";

export default function App() {
  const [target, setTarget] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [usedKeys, setUsedKeys] = useState<Record<string, string>>({});
  const [showWelcome, setShowWelcome] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const shuffledWords = useMemo(() => shuffleArray([...WORDS]), []);

  const startNewGame = useCallback(() => {
    setTarget(shuffledWords[wordIndex]);
    setWordIndex((prevIndex) => (prevIndex + 1) % shuffledWords.length);

    setGuesses([]);
    setCurrentGuess("");
    setGameOver(false);
    setGameWon(false);
    setUsedKeys({});
    setShowWelcome(false);
  }, [shuffledWords]);

  const backToWelcome = useCallback(() => {
    setShowWelcome(true);
    setGameOver(false);
  }, []);

  useEffect(() => {
    if (!showWelcome && !target) {
      setTarget(
        shuffledWords[Math.floor(Math.random() * shuffledWords.length)],
      );
    }
  }, [showWelcome, shuffledWords, target]);

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
          setGameWon(true);
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
      {showWelcome ? (
        <Welcome onStartGame={startNewGame} />
      ) : (
        <>
          <div className="logo-container">
            <WordleLogo animate={false} />
          </div>
          <div className="game-wrapper">
            <div className="game-container">
              <Grid
                guesses={guesses}
                target={target}
                currentGuess={currentGuess}
              />
              <div className="keyboard-section">
                <Keyboard onKeyPress={handleKeyPress} usedKeys={usedKeys} />
              </div>
            </div>

            {gameOver && (
              <GameOver
                won={gameWon}
                target={target}
                onPlayAgain={startNewGame}
                onBackToWelcome={backToWelcome}
              />
            )}
          </div>

          <div className="keyboard-mobile-section">
            <Keyboard onKeyPress={handleKeyPress} usedKeys={usedKeys} />
          </div>
        </>
      )}
    </div>
  );
}
