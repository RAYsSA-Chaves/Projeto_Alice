import './ButtonTop.css';
import { ArrowLeft, Home } from 'lucide-react';

function ButtonTop({ onReturnClick, onHomeClick }) {
  return (
    <div className="button-top-container">

      <button className="return-button top-button" onClick={onReturnClick}>
        <ArrowLeft />
      </button>

      <button className="home-button top-button" onClick={onHomeClick}>
        <Home />
      </button>
      
    </div>
  );
}

export default ButtonTop;
