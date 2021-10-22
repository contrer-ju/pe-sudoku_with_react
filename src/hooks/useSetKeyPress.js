import { useState, useCallback, useEffect } from "react";

const useSetKeyPress = () => {
  const [keyPress, setKeyPress] = useState("");
  const setAKeyPress = (value) => setKeyPress(value);
  const handleKeyEvent = useCallback(
    (event) => {
      setKeyPress(event.key);
    },
    [setKeyPress]
  );

  useEffect(() => {
    window.addEventListener("keyup", handleKeyEvent);
    return () => {
      window.removeEventListener("keyup", handleKeyEvent);
    };
  }, [handleKeyEvent]);

  return { keyPress, setAKeyPress };
};

export default useSetKeyPress;
