import NumberButton from "./NumberButtonComponent";

export default function NumberButtonsRow({ row, onClick }) {
  return (
    <tr>
      {row.map((cell, index) => (
        <th key={index}>
          <NumberButton clickedNumber={cell} onClick={() => onClick(cell)} />
        </th>
      ))}
    </tr>
  );
}
