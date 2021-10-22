import { cellBlocksArray } from "../constants/CellBlocksArray";

export default function isSudoluBoardOk(sudokuBoard) {
  let userSudokuBoard = [];

  for (let i = 0; i < 9; i++) {
    let userSudokuRow = [];
    for (let j = 0; j < 9; j++) {
      userSudokuRow.push(sudokuBoard[i][j].value);
    }
    userSudokuBoard.push(userSudokuRow);
  }

  let rowsCheckSolve = 0;
  let columnsCheckSolve = 0;
  let blocksCheckSolve = 0;
  for (let i = 0; i < 9; i++) {
    let rowCheckSum = 0;
    let rowCheckMissingCell = 0;
    let columnCheckSum = 0;
    let columnCheckMissingCell = 0;
    let blocksCheckSum = 0;
    let blocksCheckMissingCell = 0;
    for (let j = 0; j < 9; j++) {
      let cellValueForRowUserSudokuBoard = isNaN(
        parseInt(userSudokuBoard[i][j], 10)
      )
        ? 0
        : parseInt(userSudokuBoard[i][j], 10);
      if (cellValueForRowUserSudokuBoard === 0) rowCheckMissingCell++;
      rowCheckSum = rowCheckSum + cellValueForRowUserSudokuBoard;
      let cellValueForColumnUserSudokuBoard = isNaN(
        parseInt(userSudokuBoard[j][i], 10)
      )
        ? 0
        : parseInt(userSudokuBoard[j][i], 10);
      if (cellValueForColumnUserSudokuBoard === 0) columnCheckMissingCell++;
      columnCheckSum = columnCheckSum + cellValueForColumnUserSudokuBoard;
      let cellValueForBlockUserSudokuBoard = isNaN(
        parseInt(
          userSudokuBoard[parseInt(cellBlocksArray[i][j][0])][
            parseInt(cellBlocksArray[i][j][1])
          ],
          10
        )
      )
        ? 0
        : parseInt(
            userSudokuBoard[parseInt(cellBlocksArray[i][j][0])][
              parseInt(cellBlocksArray[i][j][1])
            ],
            10
          );
      if (cellValueForBlockUserSudokuBoard === 0) blocksCheckMissingCell++;
      blocksCheckSum = blocksCheckSum + cellValueForBlockUserSudokuBoard;
    }
    if (rowCheckSum === 45 && rowCheckMissingCell === 0) rowsCheckSolve++;
    if (columnCheckSum === 45 && columnCheckMissingCell === 0)
      columnsCheckSolve++;
    if (blocksCheckSum === 45 && blocksCheckMissingCell === 0)
      blocksCheckSolve++;
  }

  if (
    rowsCheckSolve === 9 &&
    columnsCheckSolve === 9 &&
    blocksCheckSolve === 9
  ) {
    return true;
  } else {
    return false;
  }
}
