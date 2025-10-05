import FadaMascote from '../../assets/Images/FadaMascote.svg'; 
import './FadaAnimacao.css'; 

function FadaAnimacao() { 
  return (
  <figure className="fadaContainer"> 
  <img src={FadaMascote}  className="fada" /> 
  </figure>
  
); 
}
export default FadaAnimacao