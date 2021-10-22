export default function mapBoardToCellTemplate(board) {
  return board.map((row, indexRow) =>
    row.map((cellValue, indexCell) => ({
      cellId: indexRow.toString(10) + indexCell.toString(10),
      value: cellValue,
      cellReadOnly: !(cellValue === ""),
      fontWeight: "bolder",
      color: cellValue === "" ? "white" : "",
      cellClassName:
        !(indexRow === 3 || indexRow === 4 || indexRow === 5) !==
        !(indexCell === 3 || indexCell === 4 || indexCell === 5)
          ? "btn btn-outline-dark"
          : "btn btn-outline-info",
    }))
  );
}
