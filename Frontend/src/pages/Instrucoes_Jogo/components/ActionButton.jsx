import "../css/ActionButton.css";

export default function ActionButton({ children }) {
  return (
    <button className="action-button">
      {children}
    </button>
  );
}
