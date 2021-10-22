export default function onPressNumberKeys(
  clickedCell,
  sudokuCellTemplate,
  keyPress,
  setChangesOnSudokuTemplate,
  isBoardComplete,
  setTrueSudokuBoardComplete,
  setFalseSudokuBoardComplete
) {
  if (clickedCell !== "") {
    let sudokuBoard = JSON.parse(JSON.stringify(sudokuCellTemplate));

    if (!sudokuBoard[clickedCell[0]][clickedCell[1]].cellReadOnly) {
      sudokuBoard[clickedCell[0]][clickedCell[1]].value = keyPress;
    }
    setChangesOnSudokuTemplate(sudokuBoard);
    isBoardComplete(sudokuBoard)
      ? setTrueSudokuBoardComplete()
      : setFalseSudokuBoardComplete();
  }
}
