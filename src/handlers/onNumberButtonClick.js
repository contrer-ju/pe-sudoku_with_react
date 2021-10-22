export default function onNumberButtonClick(
  clickedNumber,
  sudokuCellTemplate,
  clickedCell,
  setChangesOnSudokuTemplate,
  isBoardComplete,
  setTrueSudokuBoardComplete,
  setFalseSudokuBoardComplete
) {
  let sudokuBoard = JSON.parse(JSON.stringify(sudokuCellTemplate));

  if (!sudokuBoard[clickedCell[0]][clickedCell[1]].cellReadOnly) {
    if (clickedNumber === "X") {
      sudokuBoard[clickedCell[0]][clickedCell[1]].value = "";
    } else {
      sudokuBoard[clickedCell[0]][clickedCell[1]].value = clickedNumber;
    }
  }
  setChangesOnSudokuTemplate(sudokuBoard);
  isBoardComplete(sudokuBoard)
    ? setTrueSudokuBoardComplete()
    : setFalseSudokuBoardComplete();
}
