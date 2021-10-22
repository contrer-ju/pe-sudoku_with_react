import { sudokuCellTemplateInitial } from "../constants/SudokuCellTemplateInitial";
import { cellCoordinatesClassNameLight } from "../constants/CellCoordinatesClassNameLight";

export default function onPlayPauseToggleClick(
  gameStarted,
  playPauseState,
  togglePlayPauseState,
  setChangesOnSudokuTemplate,
  sudokuCellTemplate,
  storageASudoku,
  storageSudoku
) {
  if (!gameStarted) {
    alert("Please, press New buttom to start the game");
  } else {
    if (playPauseState) {
      let sudokuBoard = JSON.parse(JSON.stringify(sudokuCellTemplate));
      setChangesOnSudokuTemplate(sudokuCellTemplateInitial);
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          cellCoordinatesClassNameLight.includes(
            i.toString(10) + j.toString(10)
          )
            ? (sudokuBoard[i][j].cellClassName = "btn btn-outline-dark")
            : (sudokuBoard[i][j].cellClassName = "btn btn-outline-info");
        }
      }
      storageASudoku(sudokuBoard);
    } else {
      setChangesOnSudokuTemplate(storageSudoku);
    }
    togglePlayPauseState();
  }
}
