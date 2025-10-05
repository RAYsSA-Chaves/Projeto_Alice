import './ButtonTop.css';

function ButtonTop({ onClick, children }) {
    return (
        <button className="home-button" onClick={onClick}>
            {children}
        </button>
    );
}

export default ButtonTop;
