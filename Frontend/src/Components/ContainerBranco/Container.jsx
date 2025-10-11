import "./Container.css";

/**
 * Componente Container - Agrupa e centraliza o conteúdo dentro de um contêiner branco
 *
 * @param {React.ReactNode} children - Conteúdo interno a ser renderizado dentro do contêiner
 * @returns {JSX.Element} Estrutura de contêiner
 */

function Container({ children }) {
  return (
    <section className="whiteContainer">
      {/* Renderiza o conteúdo passado como filho */}
      {children}
    </section>
  );
};

export default Container;