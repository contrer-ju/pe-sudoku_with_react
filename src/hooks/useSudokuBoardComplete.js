import { useState } from "react";

const useSudokuBoardComplete = () => {
  const [sudokuBoardComplete, setSudokuBoardComplete] = useState(false);

  const setTrueSudokuBoardComplete = () => {
    setSudokuBoardComplete(true);
  };

  const setFalseSudokuBoardComplete = () => {
    setSudokuBoardComplete(false);
  };

  return {
    sudokuBoardComplete,
    setTrueSudokuBoardComplete,
    setFalseSudokuBoardComplete,
  };
};

export default useSudokuBoardComplete;
