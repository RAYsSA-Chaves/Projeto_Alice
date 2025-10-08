import FadaGif from '../../assets/Images/FadaGif.gif'; 
import './FadaAnimacao.css'; 

function FadaAnimacao() { 
  return (
  <figure className="fadaContainer"> 
    <img 
        src={FadaGif} 
        alt="gif da mascote fada" 
        className="fada" 
      /> 
  </figure>
  
); 
}
export default FadaAnimacao