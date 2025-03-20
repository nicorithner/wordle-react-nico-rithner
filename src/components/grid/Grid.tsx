import "./Grid.css";
export default function Grid() {
  // Calculate empty rows
  const emptyRows = Array.from({ length: 5 }, () => "");

  return (
    <div className="grid">
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
