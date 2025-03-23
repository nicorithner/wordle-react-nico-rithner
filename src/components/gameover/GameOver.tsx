import { useState, useEffect, useRef } from "react";
import "./GameOver.css";
import { GameOverProps } from "../../types/types";
import confetti from "canvas-confetti";

export default function GameOver({
  won,
  target,
  onPlayAgain,
  onBackToWelcome,
}: GameOverProps) {
  const [playerWins, setPlayerWins] = useState(0);
  const [wordleWins, setWordleWins] = useState(0);
  const hasRun = useRef(false);

  const triggerConfetti = () => {
    const duration = 1500;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 1002,
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: 0.1, y: 0.5 },
      });

      confetti({
        ...defaults,
        particleCount,
        origin: { x: 0.9, y: 0.5 },
      });

      confetti({
        ...defaults,
        particleCount,
        origin: { x: 0.5, y: 0.1 },
      });
    }, 250);
  };

  useEffect(() => {
    if (hasRun.current) return;

    const savedPlayerWins = localStorage.getItem("playerWins");
    const savedWordleWins = localStorage.getItem("wordleWins");

    let newPlayerWins = 0;
    let newWordleWins = 0;

    try {
      if (savedPlayerWins) {
        const parsed = parseInt(savedPlayerWins);
        if (!isNaN(parsed) && parsed >= 0) {
          newPlayerWins = parsed;
        }
      }

      if (savedWordleWins) {
        const parsed = parseInt(savedWordleWins);
        if (!isNaN(parsed) && parsed >= 0) {
          newWordleWins = parsed;
        }
      }
    } catch (e) {
      console.log("Error: ", e);
      newPlayerWins = 0;
      newWordleWins = 0;
    }

    if (won) {
      newPlayerWins += 1;
      setTimeout(() => triggerConfetti(), 100);
    } else {
      newWordleWins += 1;
    }

    localStorage.setItem("playerWins", newPlayerWins.toString());
    localStorage.setItem("wordleWins", newWordleWins.toString());

    setPlayerWins(newPlayerWins);
    setWordleWins(newWordleWins);

    hasRun.current = true;
  }, [won]);

  const resetScores = () => {
    localStorage.removeItem("playerWins");
    localStorage.removeItem("wordleWins");
    setPlayerWins(0);
    setWordleWins(0);
  };

  return (
    <div className="gameover-overlay">
      <div className="gameover-modal">
        <h2 className={won ? "win-title" : "lose-title"}>
          {won ? "🎉 You Won!" : "Game Over!"}
        </h2>

        <p className="target-word">
          The word was: <span>{target}</span>
        </p>

        <div className="stats">
          <h3>Score</h3>
          <div className="score-container">
            <div className="score-item">
              <span className="score-label">You</span>
              <span className="score-value">{playerWins}</span>
            </div>
            <div className="score-divider">-</div>
            <div className="score-item">
              <span className="score-label">Wordle</span>
              <span className="score-value">{wordleWins}</span>
            </div>
          </div>
          <button className="reset-scores-button" onClick={resetScores}>
            Reset Score
          </button>
        </div>

        <div className="gameover-buttons">
          <button className="play-again-button" onClick={onPlayAgain}>
            Play Again
          </button>
          <button className="welcome-button" onClick={onBackToWelcome}>
            Back to Welcome
          </button>
        </div>
      </div>
    </div>
  );
}
