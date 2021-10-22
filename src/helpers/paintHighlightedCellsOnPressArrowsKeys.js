import { cellCoordinatesClassNameLight } from "../constants/CellCoordinatesClassNameLight";
import { cellBlocksArray } from "../constants/CellBlocksArray";

export default function paintHighlightedCellsOnPressArrowsKeys(sudokuBoard, keyPress, clickedCell) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      cellCoordinatesClassNameLight.includes(i.toString(10) + j.toString(10))
        ? (sudokuBoard[i][j].cellClassName = "btn btn-outline-dark")
        : (sudokuBoard[i][j].cellClassName = "btn btn-outline-info");
    }
  }
  let yCoordinate = 0;
  let xCoordinate = 0;
  if (keyPress === "ArrowUp") yCoordinate = -1;
  if (keyPress === "ArrowDown") yCoordinate = 1;
  if (keyPress === "ArrowLeft") xCoordinate = -1;
  if (keyPress === "ArrowRight") xCoordinate = 1;
  for (let i = 0; i < 9; i++) {
    sudokuBoard[i][parseInt(clickedCell[1], 10) + xCoordinate].cellClassName =
      "btn btn-outline-warning";
    sudokuBoard[parseInt(clickedCell[0], 10) + yCoordinate][i].cellClassName =
      "btn btn-outline-warning";

    if (
      cellBlocksArray[i].includes(
        (parseInt(clickedCell[0], 10) + yCoordinate).toString(10) +
          (parseInt(clickedCell[1], 10) + xCoordinate).toString(10)
      )
    ) {
      for (let j = 0; j < 9; j++) {
        sudokuBoard[cellBlocksArray[i][j][0]][
          cellBlocksArray[i][j][1]
        ].cellClassName = "btn btn-outline-warning";
      }
    }
  }
  sudokuBoard[parseInt(clickedCell[0], 10) + yCoordinate][
    parseInt(clickedCell[1], 10) + xCoordinate
  ].cellClassName = "btn btn-warning";

  return sudokuBoard;
}
