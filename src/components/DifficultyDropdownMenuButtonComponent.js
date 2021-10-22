export default function DifficultyDropdownMenuButton({
  difficultyLevel,
  setADifficultyLevelMenu,
}) {
  return (
    <div className="d-flex justify-content-around align-items-center dropdown">
      <span>Difficulty: </span>
      <button
        className="btn btn-outline-dark dropdown-toggle"
        style={{ width: "95px" }}
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {difficultyLevel[0]}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <span
            id="easy-option"
            className="dropdown-item"
            onClick={() => setADifficultyLevelMenu(["Easy", 41])}
          >
            Easy
          </span>
        </li>
        <li>
          <span
            id="medium-option"
            className="dropdown-item"
            onClick={() => setADifficultyLevelMenu(["Medium", 51])}
          >
            Medium
          </span>
        </li>
        <li>
          <span
            id="hard-option"
            className="dropdown-item"
            onClick={() => setADifficultyLevelMenu(["Hard", 61])}
          >
            Hard
          </span>
        </li>
      </ul>
    </div>
  );
}
