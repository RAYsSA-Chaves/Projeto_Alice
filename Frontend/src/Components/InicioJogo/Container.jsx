import '../InicioJogo/Container.css'
import Fada_rindo from '../../Assets/Images/Fada_rindo.png'

export default function Container({ children }) {
  return (
    <section className="containerBranco" >
      {children}
      
      <img src={Fada_rindo} alt="Fada" />
    </section >
  );

}

