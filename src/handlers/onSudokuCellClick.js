import { cellCoordinatesClassNameLight } from "../constants/CellCoordinatesClassNameLight";
import { cellBlocksArray } from "../constants/CellBlocksArray";

export default function onSudokuCellClick(
  cellId,
  setAClickedCell,
  sudokuCellTemplate,
  previousClickedCell,
  setChangesOnSudokuTemplate,
  setAPreviousClickedCell
) {
  setAClickedCell(cellId);
  let sudokuBoard = JSON.parse(JSON.stringify(sudokuCellTemplate));

  if (previousClickedCell !== "") {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        cellCoordinatesClassNameLight.includes(i.toString(10) + j.toString(10))
          ? (sudokuBoard[i][j].cellClassName = "btn btn-outline-dark")
          : (sudokuBoard[i][j].cellClassName = "btn btn-outline-info");
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    sudokuBoard[i][cellId[1]].cellClassName = "btn btn-outline-warning";
    sudokuBoard[cellId[0]][i].cellClassName = "btn btn-outline-warning";
    if (cellBlocksArray[i].includes(cellId)) {
      for (let j = 0; j < 9; j++) {
        sudokuBoard[cellBlocksArray[i][j][0]][
          cellBlocksArray[i][j][1]
        ].cellClassName = "btn btn-outline-warning";
      }
    }
  }
  sudokuBoard[cellId[0]][cellId[1]].cellClassName = "btn btn-warning";

  setChangesOnSudokuTemplate(sudokuBoard);
  setAPreviousClickedCell(cellId);
}
