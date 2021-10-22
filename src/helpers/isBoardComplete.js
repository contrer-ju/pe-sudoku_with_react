export default function isBoardComplete(sudokuBoard) {
  let emptyCellCounter = 0;

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (sudokuBoard[i][j].value === "")
        emptyCellCounter = emptyCellCounter + 1;
    }
  }
  if (emptyCellCounter === 0) return true;

  return false;
}
