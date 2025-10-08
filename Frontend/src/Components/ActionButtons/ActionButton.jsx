import "./ActionButton.css";

/**
 * Componente de botão reutilizável com ícone e texto
 *
 * @param {React.ReactNode} children - Texto ou elementos dentro do botão
 * @param {Function} onClick - Função executada ao clicar no botão
 * @param {JSX.Element} icon - (Opcional) Ícone exibido à esquerda do texto
 */
function ActionButton({ children, onClick, icon }) {
  return (
    <button className="action-button" onClick={onClick}>
      {/* Renderiza o ícone apenas se for passado via prop */}
      {icon && <span className="action-button-icon">{icon}</span>}
      
      {/* Renderiza o conteúdo do botão (texto, etc.) */}
      {children}
    </button>
  );
};

export default ActionButton;
