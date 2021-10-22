import { PAUSE_ICON } from "../constants/PlayPauseIconCode";
import { PLAY_ICON } from "../constants/PlayPauseIconCode";

export default function TimerDisplay({
  playPauseState,
  onPlayPauseToggleClick,
  second,
  minute,
  gameStarted,
  togglePlayPauseState,
  setChangesOnSudokuTemplate,
  sudokuCellTemplate,
  storageASudoku,
  storageSudoku,
}) {
  return (
    <div>
      <span className="h4">
        {minute}:{second} &nbsp;&nbsp;
      </span>
      <button
        id="play-buttom"
        className="h3 btn btn-outline-dark"
        onClick={() =>
          onPlayPauseToggleClick(
            gameStarted,
            playPauseState,
            togglePlayPauseState,
            setChangesOnSudokuTemplate,
            sudokuCellTemplate,
            storageASudoku,
            storageSudoku
          )
        }
      >
        {playPauseState ? PLAY_ICON : PAUSE_ICON}
      </button>
    </div>
  );
}
