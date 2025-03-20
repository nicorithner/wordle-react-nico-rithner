import { KeyboardProps } from "../../types/types";
import "./Keyboard.css";



export default function Keyboard({ onKeyPress, usedKeys }: KeyboardProps) {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"],
  ];

  return (
    <div className="keyboard">
      {rows.map((row, i) => (
        <div key={i} className="row">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => onKeyPress(key)}
              className={`key ${usedKeys[key.toLowerCase()] || ""}`}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
