import "./Container.css";

/**
 * Componente Container para agrupar e centralizar conteúdo
 *
 * @param {React.ReactNode} children - Conteúdo interno a ser renderizado dentro do contêiner
 * @returns {JSX.Element} Estrutura do contêiner
 */

function Container({ children }) {
  return (
    <div className="whiteContainer">
      {/* Renderiza o conteúdo passado como filho */}
      {children}
    </div>
  );
};

export default Container;
