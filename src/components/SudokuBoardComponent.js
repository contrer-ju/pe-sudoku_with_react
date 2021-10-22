import SudokuRow from "./SudokuRowComponent";

export default function SudokuBoard({
  onSudokuCellClicked,
  sudokuCellTemplate
}) {
  return (
    <div id="sudoku-board" className="btn-group btn-group-lg">
      <table>
        <tbody>
          {sudokuCellTemplate.map((row, rowIndex) => (
            <SudokuRow
              key={rowIndex}
              row={row}
              rowIndex={rowIndex}
              {...{
                onSudokuCellClicked
              }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
