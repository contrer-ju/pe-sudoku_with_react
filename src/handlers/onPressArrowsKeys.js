import paintHighlightedCellsOnPressArrowsKeys from "../helpers/paintHighlightedCellsOnPressArrowsKeys";

export default function onPressArrowsKeys(
  sudokuCellTemplate,
  clickedCell,
  keyPress,
  setAClickedCell,
  setChangesOnSudokuTemplate
) {
  let sudokuBoard = JSON.parse(JSON.stringify(sudokuCellTemplate));

  if (clickedCell !== "") {
    if (keyPress === "ArrowUp" && parseInt(clickedCell[0], 10) > 0) {
      setAClickedCell(
        (parseInt(clickedCell[0], 10) - 1).toString(10) + clickedCell[1]
      );
      setChangesOnSudokuTemplate(
        paintHighlightedCellsOnPressArrowsKeys(
          sudokuBoard,
          keyPress,
          clickedCell
        )
      );
    }
    if (keyPress === "ArrowDown" && parseInt(clickedCell[0], 10) < 8) {
      setAClickedCell(
        (parseInt(clickedCell[0], 10) + 1).toString(10) + clickedCell[1]
      );
      setChangesOnSudokuTemplate(
        paintHighlightedCellsOnPressArrowsKeys(
          sudokuBoard,
          keyPress,
          clickedCell
        )
      );
    }
    if (keyPress === "ArrowLeft" && parseInt(clickedCell[1], 10) > 0) {
      setAClickedCell(
        clickedCell[0] + (parseInt(clickedCell[1], 10) - 1).toString(10)
      );
      setChangesOnSudokuTemplate(
        paintHighlightedCellsOnPressArrowsKeys(
          sudokuBoard,
          keyPress,
          clickedCell
        )
      );
    }
    if (keyPress === "ArrowRight" && parseInt(clickedCell[1], 10) < 8) {
      setAClickedCell(
        clickedCell[0] + (parseInt(clickedCell[1], 10) + 1).toString(10)
      );
      setChangesOnSudokuTemplate(
        paintHighlightedCellsOnPressArrowsKeys(
          sudokuBoard,
          keyPress,
          clickedCell
        )
      );
    }
  }
}
