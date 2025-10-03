import Nuvens from '../../Assets/Images/Nuvens.png'
import Estrelas_fundo from '../../Assets/Images/Estrelas_fundo.png'
// import HomeButton from '../../Components/InicioJogo/HomeButton.jsx'
// import ActionButton from '../../Components/InicioJogo/ActionButton.jsx'
import Container from '../../Components/InicioJogo/Container.jsx'
import "./Inicio.css";

function Inicio() {
    return (
        <>
            <section className="container">

                <img src={Estrelas_fundo} alt="Estrelas" className="estrelas-bg" />


                    <img src={Nuvens} alt="Nuvens" className="nuvens-bg" />

                <Container>
                    <div>
                        <h1> JOGAR </h1>
                        <h1> COMO JOGAR ?</h1>
                    </div>
                </Container>
            </section>

            




        </>

    );
}

export default Inicio;
