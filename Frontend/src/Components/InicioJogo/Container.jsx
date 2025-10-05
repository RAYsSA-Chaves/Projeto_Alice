import './Container.css';

function Container({ children }) {
    return (
        <div className="white-container">
            {children}
        </div>
    );
}

export default Container;
