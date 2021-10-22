import { useState } from "react";

const useSetClickedCells = () => {
  const [clickedCell, setClickedCell] = useState("");
  const [previousClickedCell, setPreviousClickedCell] = useState("");

  const setAClickedCell = (value) => setClickedCell(value);
  const setAPreviousClickedCell = (value) => setPreviousClickedCell(value);

  return {
    clickedCell,
    setAClickedCell,
    previousClickedCell,
    setAPreviousClickedCell
  };
};

export default useSetClickedCells;
