export default function NumberButton({ clickedNumber, onClick }) {
  return (
    <div
      id={clickedNumber}
      className="btn btn-primary"
      style={{ width: "63px", padding: "14px" }}
      onClick={onClick}
    >
      {clickedNumber}
    </div>
  );
}
