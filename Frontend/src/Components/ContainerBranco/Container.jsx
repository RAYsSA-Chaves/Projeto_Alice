import "./Container.css";

/**
 * Componente Container
 * Responsável por agrupar e centralizar o conteúdo principal
 * dentro de um contêiner branco estilizado.
 *
 * @param {React.ReactNode} children - Conteúdo interno a ser renderizado dentro do contêiner.
 * @returns {JSX.Element} Estrutura de contêiner.
 */

function Container({ children }) {
  return (
    <div className="white-container">
      {/* Renderiza o conteúdo passado como filho */}
      {children}
    </div>
  );
};

export default Container;