import { useState } from "react";
import { sudokuCellTemplateInitial } from "../constants/SudokuCellTemplateInitial";
import mapBoardToCellTemplate from "../helpers/mapBoardToCellTemplate";

const useSetSudokuCellTemplate = () => {
  const [sudokuCellTemplate, setSudokuCellTemplate] = useState(
    sudokuCellTemplateInitial
  );

  const setChangesOnSudokuTemplate = (sudokuBoard) => {
    setSudokuCellTemplate(sudokuBoard);
  };

  const setNewRamdomSudokuTemplate = (sudokuBoard, difficultyLevel) => {
    let coordinateArray = [];
    let i = 0;
    while (i < difficultyLevel[1]) {
      let coordinateX = Math.floor(Math.random() * 9);
      let coordinateY = Math.floor(Math.random() * 9);
      let coordinateXY = parseInt(
        coordinateX.toString(10) + coordinateY.toString(10),
        10
      );
      if (!coordinateArray.includes(coordinateXY)) {
        sudokuBoard[coordinateX][coordinateY] = "";
        coordinateArray.push(coordinateXY);
        i++;
      }
    }
    setSudokuCellTemplate(mapBoardToCellTemplate(sudokuBoard));
  };
  return {
    sudokuCellTemplate,
    setChangesOnSudokuTemplate,
    setNewRamdomSudokuTemplate,
  };
};

export default useSetSudokuCellTemplate;
