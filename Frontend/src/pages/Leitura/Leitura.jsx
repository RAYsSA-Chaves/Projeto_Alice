import Livro from "../../components/Livro/livro";
import HeaderLivro from "../../components/HeaderLivro/HeaderLivro";
import { useState } from "react";

function LeituraPage() {
    const [busca, setBusca] = useState("");

    return (
        <>
            <HeaderLivro
                busca={busca}
                setBusca={setBusca}
            />
            <Livro 
                busca={busca}
            />
        </>
    )
}

export default LeituraPage;