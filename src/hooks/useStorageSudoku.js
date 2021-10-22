import { useState } from "react";

const useStorageSudoku = () => {
  const [storageSudoku, setStorageSudoku] = useState();

  const clearStorageSudoku = () => {
    setStorageSudoku();
  };

  const storageASudoku = (sudokuboard) => {
    setStorageSudoku(sudokuboard);
  };
  return {
    storageSudoku,
    clearStorageSudoku,
    storageASudoku
  };
};

export default useStorageSudoku;
