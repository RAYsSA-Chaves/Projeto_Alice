import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CaminhoAbelha.css";

function CaminhoAbelha() {

    // cria um estado chamado scroll progress para armazenar a porcentagem de rolagem da página
    // inicialmente o valor é 0
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        // função que é chamada sempre que o usuário rolar a página
        const handleScroll = () => {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPos = window.scrollY;
            // calcula a porcentagem de rolagem ao total da página
            const progress = (scrollPos / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        // remove i listener  
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
        {/* seção para a linha do progresso */}
            <section className="caminhoAbelha">
                {/* cria 12 span elementos para representar as linhas do caminho
                cada um tem uma variavel --i css para a animação */}
                <div className="linhaAbelha" style={{ width: `${scrollProgress}%` }}>
                    {Array(12).fill().map((_, i) => (
                        <span key={i} style={{ "--i": i }}></span>
                    ))}
                </div>
            </section>

        </>
    )
}

export default CaminhoAbelha