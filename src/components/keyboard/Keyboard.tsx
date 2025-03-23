import { KeyboardProps } from "../../types/types";
import "./Keyboard.css";
import { FiDelete } from "react-icons/fi";

export default function Keyboard({ onKeyPress, usedKeys }: KeyboardProps) {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"],
  ];

  const renderKeyboard = (className: string) => (
    <div className={className}>
      {rows.map((row, i) => (
        <div key={i} className="row">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => onKeyPress(key)}
              className={`key ${usedKeys[key.toLowerCase()] || ""}`}
            >
              {key === "Backspace" ? (
                <>
                  <span className="backspace-text">{key}</span>
                  <span className="backspace-icon">
                    <FiDelete />
                  </span>
                </>
              ) : (
                key
              )}
            </button>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <>
      {renderKeyboard("keyboard")}
      {renderKeyboard("keyboard-mobile")}
    </>
  );
}
