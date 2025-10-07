import FadaMascote from '../../assets/Images/FadaMascote.svg'; 
import './FadaAnimacao.css'; 

function FadaAnimacao() { 
  return (
  <figure className="fadaContainer"> 
    <img 
        src={FadaMascote} 
        alt="gif da mascote fada" 
        className="fada" 
      /> 
  </figure>
  
); 
}
export default FadaAnimacao