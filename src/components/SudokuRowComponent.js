import SudokuCell from "./SudokuCellComponent";

export default function SudokuRow({ row, onSudokuCellClicked }) {
  return (
    <tr>
      {row.map((cell, cellIndex) => (
        <SudokuCell
          cellId={cell.cellId}
          fontWeight={cell.fontWeight}
          color={cell.color}
          key={cellIndex}
          value={cell.value}
          cellReadOnly={cell.cellReadOnly}
          cellClassName={cell.cellClassName}
          {...{
            onSudokuCellClicked
          }}
        />
      ))}
    </tr>
  );
}
