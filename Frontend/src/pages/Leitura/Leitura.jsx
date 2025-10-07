import Livro from "../../Components/Livro/livro";
import HeaderLivro from "../../Components/HeaderLivro/HeaderLivro";
import { useState, useEffect } from "react";
import Joyride from "react-joyride";

function LeituraPage() {
    const [busca, setBusca] = useState({ tipo: "", valor: "" }); // controla palavra buscada
    const [modoGrifar, setModoGrifar] = useState(false); // controla o modo marca-texto
    const [inputTexto, setInputTexto] = useState(""); // controla valor do input de texto
    const [inputNum, setInputNum] = useState("") // controla valor do input de número
    const [runTutorial, setRunTutorial] = useState(false); // rodar tutorial no primeiro acesso

    // Verificar no localStorage se já viu o tutorial
    useEffect(() => {
        const jaViu = localStorage.getItem("tutorialVisto");
        if (!jaViu) {
            setRunTutorial(true);
            localSotorage.setItem("tutorialVisto", "true");
        }
    }, []);

    // Passos da explicação do tutorial
    const steps = [
        {
            target: "#pesquisaPalavra",
            content: "Você pode buscar palavras dentro do livro!"
        },
        {
            target: "#pesquisaNum",
            content: "Busque por palavras com alguma quantidade de letras!"
        },
        {
            target: "#bntGrifar",
            content: "Ou grife uma palavra no livro para localizar todas as outras iguais a ela!"
        },
    ];

    return (
        <>
        <Joyride
            steps={steps}
            run={runTutorial}
            continuous
            showSkipButton
        />
            <HeaderLivro
                busca={busca}
                setBusca={setBusca}
                modoGrifar={modoGrifar}
                setModoGrifar={setModoGrifar}
                inputTexto={inputTexto}
                setInputTexto={setInputTexto}
                inputNum={inputNum}
                setInputNum={setInputNum}
            />
            <Livro 
                busca={busca}
                setBusca={setBusca}
                modoGrifar={modoGrifar}
                setModoGrifar={setModoGrifar}
            />
        </>
    )
}

export default LeituraPage;