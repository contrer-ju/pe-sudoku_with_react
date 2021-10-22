export default function SudokuCell({
  cellId,
  fontWeight,
  color,
  value,
  cellReadOnly,
  cellClassName,
  onSudokuCellClicked
}) {
  return (
    <th>
      <span
        id={cellId}
        readOnly={cellReadOnly}
        onClick={() => onSudokuCellClicked(cellId)}
        className={cellClassName}
        style={{
          width: "40px",
          height: "50px",
          padding: "12px",
          caretColor: "transparent",
          fontWeight: `${fontWeight}`,
          color: `${color}`
        }}
      >
        {value}
      </span>
    </th>
  );
}
