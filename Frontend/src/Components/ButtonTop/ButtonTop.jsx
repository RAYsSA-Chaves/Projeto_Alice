import "./ButtonTop.css";

/**
 * Componente de botão superior (geralmente o botão "Home").
 *
 * @param {Function} onClick - Função executada ao clicar no botão
 * @param {React.ReactNode} children - Conteúdo interno do botão (ícone ou texto)
 * @returns {JSX.Element} Botão estilizado
 */

function ButtonTop({ onClick, children }) {
    return (
        <button className="homeButton" onClick={onClick}>
            {/* Renderiza o conteúdo passado como filho (ícone, imagem, texto, etc.) */}
            {children}
        </button>
    );
};

export default ButtonTop;
