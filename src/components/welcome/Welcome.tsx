import "./Welcome.css";
import { WelcomeProps } from "../../types/types";
import WordleLogo from "../wordleLogo/WordleLogo";

export default function Welcome({ onStartGame }: WelcomeProps) {
  return (
    <div className="welcome-overlay">
      <div className="welcome-modal">
      <WordleLogo />

        <div className="welcome-content">
          <h2>Welcome to Wordle!</h2>
          <p>
            Test your word-guessing skills in this fun and challenging game.
          </p>

          <div className="game-rules">
            <h3>Game Rules</h3>
            <ul>
              <li>You have five guesses to find the hidden word</li>
              <li>All words are 5 letters long</li>
              <li>Letters in the correct position will be highlighted green</li>
              <li>
                Letters in the word but in the wrong position will be
                highlighted yellow
              </li>
              <li>
                The yellow highlight won't appear if you have more of a letter
                than in the target word
              </li>
            </ul>

            <div className="example">
              <p>
                Example: If the target word is WATER and you guess OTTER, the
                first T won't get a yellow highlight
              </p>
            </div>
          </div>

          <button className="start-game-button" onClick={onStartGame}>
            Start New Game
          </button>
        </div>
      </div>
    </div>
  );
}
