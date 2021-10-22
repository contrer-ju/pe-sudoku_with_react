export default function onPressEraseKeys(
  clickedCell,
  sudokuCellTemplate,
  setChangesOnSudokuTemplate
) {
  if (clickedCell !== "") {
    let sudokuBoard = JSON.parse(JSON.stringify(sudokuCellTemplate));

    if (!sudokuBoard[clickedCell[0]][clickedCell[1]].cellReadOnly) {
      sudokuBoard[clickedCell[0]][clickedCell[1]].value = "";
    }
    setChangesOnSudokuTemplate(sudokuBoard);
  }
}
