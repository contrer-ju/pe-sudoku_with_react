import { boards } from "../constants/Boards";

export default function onNewButtomClick(
  setNewRamdomSudokuTemplate,
  difficultyLevel,
  setTruePlayPauseState,
  setTrueGameStarted,
  setFalseSudokuBoardComplete,
  clearStorageSudoku,
  setAPreviousClickedCell,
  setAClickedCell,
  resetTimer,
  setAKeyPress
) {
  const randomNumber = Math.floor(Math.random() * 5);
  let sudokuBoard = JSON.parse(JSON.stringify(boards[randomNumber]));
  setNewRamdomSudokuTemplate(sudokuBoard, difficultyLevel);
  setTruePlayPauseState();
  setTrueGameStarted();
  setFalseSudokuBoardComplete();
  clearStorageSudoku();
  setAPreviousClickedCell("");
  setAClickedCell("");
  resetTimer();
  setAKeyPress("");
}
