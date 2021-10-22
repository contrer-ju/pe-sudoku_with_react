import React, { useEffect } from "react";

import SudokuBoard from "./components/SudokuBoardComponent";
import TimerDisplay from "./components/TimerDisplayComponent";
import NumberButtonsPad from "./components/NumberButtonsPadComponent";
import ControlButtons from "./components/ControlButtonsComponent";
import DifficultyDropdownMenuButton from "./components/DifficultyDropdownMenuButtonComponent";

import onPlayPauseToggleClick from "./handlers/onPlayPauseToggleClick";
import onNumberButtonClick from "./handlers/onNumberButtonClick";
import onSudokuCellClick from "./handlers/onSudokuCellClick";
import onPressEraseKeys from "./handlers/onPressEraseKeys";
import onPressNumberKeys from "./handlers/onPressNumberKeys";
import onPressArrowsKeys from "./handlers/onPressArrowsKeys";
import onNewButtomClick from "./handlers/onNewButtomClick";
import onClearButtomClick from "./handlers/onClearButtomClick";

import isSudoluBoardOk from "./helpers/isSudokuBoardOk";
import isBoardComplete from "./helpers/isBoardComplete";
import removeCellSelected from "./helpers/removeCellSelected";

import useSetClickedCells from "./hooks/useSetClickedCells";
import useDisplayTime from "./hooks/useDisplayTime";
import useSetDifficultyLevel from "./hooks/useSetDifficultyLevel";
import useStorageSudoku from "./hooks/useStorageSudoku";
import useSetKeyPress from "./hooks/useSetKeyPress";
import useGameStarted from "./hooks/useGameStarted";
import useSudokuBoardComplete from "./hooks/useSudokuBoardComplete";
import useSetSudokuCellTemplate from "./hooks/useSetSudokuCellTemplate";

export default function App() {
  const {
    clickedCell,
    setAClickedCell,
    setAPreviousClickedCell,
    previousClickedCell
  } = useSetClickedCells();
  const {
    second,
    minute,
    resetTimer,
    playPauseState,
    setFalsePlayPauseState,
    setTruePlayPauseState,
    togglePlayPauseState
  } = useDisplayTime();
  const {
    sudokuCellTemplate,
    setChangesOnSudokuTemplate,
    setNewRamdomSudokuTemplate
  } = useSetSudokuCellTemplate();
  const {
    sudokuBoardComplete,
    setTrueSudokuBoardComplete,
    setFalseSudokuBoardComplete
  } = useSudokuBoardComplete();
  const {
    gameStarted,
    setTrueGameStarted,
    setFalseGameStarted
  } = useGameStarted();
  const { difficultyLevel, setADifficultyLevelMenu } = useSetDifficultyLevel();
  const {
    storageSudoku,
    clearStorageSudoku,
    storageASudoku
  } = useStorageSudoku();
  const { keyPress, setAKeyPress } = useSetKeyPress();

  useEffect(() => {
    if (keyPress !== "") {
      if (
        keyPress === "1" ||
        keyPress === "2" ||
        keyPress === "3" ||
        keyPress === "4" ||
        keyPress === "5" ||
        keyPress === "6" ||
        keyPress === "7" ||
        keyPress === "8" ||
        keyPress === "9"
      ) {
        onPressNumberKeys(
          clickedCell,
          sudokuCellTemplate,
          keyPress,
          setChangesOnSudokuTemplate,
          isBoardComplete,
          setTrueSudokuBoardComplete,
          setFalseSudokuBoardComplete
        );
      }
      if (
        keyPress === "ArrowUp" ||
        keyPress === "ArrowDown" ||
        keyPress === "ArrowLeft" ||
        keyPress === "ArrowRight"
      ) {
        onPressArrowsKeys(
          sudokuCellTemplate,
          clickedCell,
          keyPress,
          setAClickedCell,
          setChangesOnSudokuTemplate
        );
      }
      if (keyPress === "Backspace" || keyPress === "Delete") {
        onPressEraseKeys(
          clickedCell,
          sudokuCellTemplate,
          setChangesOnSudokuTemplate
        );
      }
      setAKeyPress("");
    }
  }, [
    keyPress,
    clickedCell,
    sudokuCellTemplate,
    setAKeyPress,
    setChangesOnSudokuTemplate,
    setTrueSudokuBoardComplete,
    setFalseSudokuBoardComplete,
    setAClickedCell
  ]);

  useEffect(() => {
    if (sudokuBoardComplete) {
      let sudokuBoard = JSON.parse(JSON.stringify(sudokuCellTemplate));

      if (isSudoluBoardOk(sudokuBoard)) {
        setFalsePlayPauseState();
        setChangesOnSudokuTemplate(removeCellSelected(sudokuBoard));
        alert("Excelent for a Level: " + difficultyLevel[0]);
      } else {
        alert("Incorrect solution. Check the board and try again");
      }
      setFalseSudokuBoardComplete();
    }
  }, [
    difficultyLevel,
    minute,
    second,
    setChangesOnSudokuTemplate,
    setFalsePlayPauseState,
    setFalseSudokuBoardComplete,
    sudokuBoardComplete,
    sudokuCellTemplate
  ]);

  const onNumberButtonCliked = (clickedNumber) => {
    onNumberButtonClick(
      clickedNumber,
      sudokuCellTemplate,
      clickedCell,
      setChangesOnSudokuTemplate,
      isBoardComplete,
      setTrueSudokuBoardComplete,
      setFalseSudokuBoardComplete
    );
  };

  const onNewButtomClicked = () =>
    onNewButtomClick(
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
    );

  const onClearButtonCliked = () =>
    onClearButtomClick(
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
    );

  const onSudokuCellClicked = (cellId) => {
    onSudokuCellClick(
      cellId,
      setAClickedCell,
      sudokuCellTemplate,
      previousClickedCell,
      setChangesOnSudokuTemplate,
      setAPreviousClickedCell
    );
  };

  return (
    <div
      id="sudoku-page"
      className="d-flex justify-content-center align-items-center h-100"
      style={{ backgroundColor: "lightgray" }}
    >
      <div
        id="sudoku-app"
        style={{ padding: "40px", backgroundColor: "gray" }}
        className="d-flex justify-content-between align-items-center border border-5 border-warning"
      >
        <SudokuBoard
          {...{
            onSudokuCellClicked,
            sudokuCellTemplate
          }}
        />
        <div style={{ padding: "15px", backgroundColor: "gray" }}></div>
        <div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h3 id="title">Game Controls</h3>
            <TimerDisplay
              {...{
                playPauseState,
                onPlayPauseToggleClick,
                second,
                minute,
                gameStarted,
                togglePlayPauseState,
                setChangesOnSudokuTemplate,
                sudokuCellTemplate,
                storageASudoku,
                storageSudoku
              }}
            />
          </div>
          <br />
          <NumberButtonsPad
            {...{
              onClick: onNumberButtonCliked
            }}
          />
          <br />
          <br />
          <div className="d-flex justify-content-around align-items-center">
            <ControlButtons value="New" onClick={onNewButtomClicked} />
            <ControlButtons value="Clear" onClick={onClearButtonCliked} />
          </div>
          <br />
          <DifficultyDropdownMenuButton
            {...{ difficultyLevel, setADifficultyLevelMenu }}
          />
        </div>
      </div>
    </div>
  );
}
