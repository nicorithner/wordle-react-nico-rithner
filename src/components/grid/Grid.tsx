import { GridProps } from "../../types/types";
import "./Grid.css";

export default function Grid({ currentGuess }: GridProps) {
  const emptyRows = Array.from({ length: 5 }, () => "");

  return (
    <div className="grid">
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
