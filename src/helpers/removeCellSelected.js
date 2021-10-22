import { cellCoordinatesClassNameLight } from "../constants/CellCoordinatesClassNameLight";

export default function removeCellSelected(sudokuBoard) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      sudokuBoard[i][j].cellReadOnly = true;
      cellCoordinatesClassNameLight.includes(i.toString(10) + j.toString(10))
        ? (sudokuBoard[i][j].cellClassName = "btn btn-outline-dark")
        : (sudokuBoard[i][j].cellClassName = "btn btn-outline-info");
    }
  }

  return sudokuBoard;
}
