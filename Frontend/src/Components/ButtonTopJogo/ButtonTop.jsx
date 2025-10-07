import './ButtonTop.css';
import iconCasa from '../../Assets/Images/iconCasa.png';

function ButtonTop({ onHomeClick }) {
  return (
    <div className="button-top-container">

      <button className="home-button top-button" onClick={onHomeClick}>
        <img src={iconCasa} alt='home icone'/>
      </button>
      
    </div>
  );
}

export default ButtonTop;
