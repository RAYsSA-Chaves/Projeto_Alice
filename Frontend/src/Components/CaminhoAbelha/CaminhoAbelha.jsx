import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CaminhoAbelha.css";

// função criada para realizar a animação
function CaminhoAbelha() {
    useEffect(() => {
        AOS.init({
            duration: 100,
            once: false,
        });
    }, []);

    // seção e div para estilização dos traços do caminho e animação
    return (
        <>
            <section className="caminhoAbelha">
                <div className="traços">
                    {Array(12).fill().map((_, i) => (
                        <span key={i} className="tracinho" data-aos="zoom-in" data-aos-delay={i * 150}></span>
                    ))}
                </div>
            </section>

        </>
    )
}

export default CaminhoAbelha;