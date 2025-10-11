import FadaGif from '../../assets/Images/FadaGif.gif'; 
import './FadaAnimacao.css'; 

function FadaAnimacao() { 
  return (
    // fada animada
  <figure className="fadaContainer"> 
    <img 
        src={FadaGif} 
        alt="Gif da mascote fada" 
        className="fada" 
      /> 
  </figure>
  
); 
}
export default FadaAnimacao