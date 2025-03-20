import { GridProps } from "../../types/types";
import { evaluateGuess } from "../../utils/wordUtils";
import "./Grid.css";

export default function Grid({ guesses, target, currentGuess }: GridProps) {
  const emptyRows = Array.from(
    { length: 5 - guesses.length - (currentGuess ? 1 : 0) },
    () => ""
  );

  return (
    <div className="grid">
      {guesses.map((guess, rowIndex) => (
        <div key={`row-${rowIndex}`} className="row">
          {Array.from({ length: 5 }, (_, colIndex) => {
            const evaluation = evaluateGuess(guess, target);
            return (
              <div
                key={`cell-${rowIndex}-${colIndex}`}
                className={`cell ${evaluation[colIndex]}`}
              >
                {guess[colIndex] || ""}
              </div>
            );
          })}
        </div>
      ))}

      {currentGuess && (
        <div className="row">
          {Array.from({ length: 5 }, (_, colIndex) => (
            <div key={`current-${colIndex}`} className="cell">
              {currentGuess[colIndex] || ""}
            </div>
          ))}
        </div>
      )}

      {emptyRows.map((_, rowIndex) => (
        <div key={`empty-${rowIndex}`} className="row">
          {Array.from({ length: 5 }, (_, colIndex) => (
            <div
              key={`empty-cell-${rowIndex}-${colIndex}`}
              className="cell"
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}
