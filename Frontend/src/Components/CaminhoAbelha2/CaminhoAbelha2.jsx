import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CaminhoAbelha2.css";

// função criada para realizar a animação
function CaminhoAbelha2() {
    useEffect(() => {
        AOS.init({
            duration: 100,
            once: false,
        });
    }, []);

    // seção e div para estilização do caminho e traços da animação
    return (
        <>
            <section className="caminhoAbelha2">
                <div className="traços2">
                    {Array(12).fill().map((_, i) => (
                        <span key={i} className="tracinho2" data-aos="zoom-in" data-aos-delay={i * 150}></span>
                    ))}
                </div>
            </section>

        </>
    )
}

export default CaminhoAbelha2