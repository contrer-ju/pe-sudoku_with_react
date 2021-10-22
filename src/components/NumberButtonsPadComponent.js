import { numberButtonsTemplate } from "../constants/NumberButtonsTemplate";
import NumberButtonsRow from "./NumberButtonsRowComponent";
import NumberButton from "./NumberButtonComponent";
import SpaceButton from "./SpaceButtonComponent";

export default function NumberButtonsPad({ onClick }) {
  return (
    <div id="number-buttond-pad" className="btn-group btn-group-lg">
      <table>
        <tbody>
          {numberButtonsTemplate.map((row, index) => (
            <NumberButtonsRow key={index} row={row} onClick={onClick} />
          ))}
          <tr>
            <SpaceButton />
            <th>
              <NumberButton clickedNumber="X" onClick={() => onClick("X")} />
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
