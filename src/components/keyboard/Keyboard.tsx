import "./Keyboard.css";

export default function Keyboard() {
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
            <button className="key"
              key={key}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
