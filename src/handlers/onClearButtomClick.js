import { sudokuCellTemplateInitial } from "../constants/SudokuCellTemplateInitial";

export default function onClearButtomClick(
  setADifficultyLevelMenu,
  setChangesOnSudokuTemplate,
  setAKeyPress,
  setAPreviousClickedCell,
  setAClickedCell,
  clearStorageSudoku,
  setFalseSudokuBoardComplete,
  setFalseGameStarted,
  setFalsePlayPauseState,
  resetTimer
) {
  setADifficultyLevelMenu(["Easy", 41]);
  setChangesOnSudokuTemplate(sudokuCellTemplateInitial);
  setAKeyPress("");
  setAPreviousClickedCell("");
  setAClickedCell("");
  clearStorageSudoku();
  setFalseSudokuBoardComplete();
  setFalseGameStarted();
  setFalsePlayPauseState();
  resetTimer();
}
