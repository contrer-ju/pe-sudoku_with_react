export default function ControlButtons({ value, onClick }) {
  return (
    <div
      id={value}
      className="btn btn-outline-dark"
      style={{ width: "60px", padding: "7px" }}
      onClick={onClick}
    >
      {value}
    </div>
  );
}
