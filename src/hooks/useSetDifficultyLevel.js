import { useState } from "react";

const useSetDifficultyLevel = () => {
  const [difficultyLevel, setDifficultyLevel] = useState(["Easy", 41]);
  const setADifficultyLevelMenu = (level) => setDifficultyLevel(level);

  return { difficultyLevel, setADifficultyLevelMenu };
};

export default useSetDifficultyLevel;
