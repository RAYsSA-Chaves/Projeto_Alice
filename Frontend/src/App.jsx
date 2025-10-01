import "./App.css";
import HomeButton from "./pages/Instrucoes_Jogo/components/HomeButton";
import ActionButton from "./pages/Instrucoes_Jogo/components/ActionButton";
import Container from "./pages/Instrucoes_Jogo/components/Container";

// imagens
import nuvens from './assets/Imagens Jogo/nuvens.png'

function App() {
  return (
    <div className="app">
      <HomeButton />

      

      <Container>
        <h1>Jogo:</h1>
        <h2>O Que Você Vê?</h2>
        <div className="buttons-container">
          <ActionButton>▶ JOGAR</ActionButton>
          <ActionButton>COMO JOGAR ?</ActionButton>
        </div>
      </Container>
    </div>
  );
}

export default App;
