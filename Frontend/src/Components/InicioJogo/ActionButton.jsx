import './ActionButton.css';

function ActionButton({ children, onClick, icon }) {
    return (
        <button className="action-button" onClick={onClick}>
            {icon && <span className="action-button-icon">{icon}</span>}
            {children}
        </button>
    );
}

export default ActionButton;
