import Livro from "../../components/Livro/livro";
import HeaderLivro from "../../components/HeaderLivro/HeaderLivro";
import { useState } from "react";

function LeituraPage() {
    const [busca, setBusca] = useState({ tipo: "", valor: "" }); // controla palavra buscada
    const [modoGrifar, setModoGrifar] = useState(false); // controla o modo marca-texto
    const [inputTexto, setInputTexto] = useState(""); // controla valor do input de texto
    const [inputNum, setInputNum] = useState("") // controla valor do input de número


    return (
        <>
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