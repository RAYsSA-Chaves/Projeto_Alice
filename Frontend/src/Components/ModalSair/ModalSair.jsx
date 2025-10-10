import { LogOut } from "lucide-react";
import ActionButton from "../ActionButtons/ActionButton.jsx";
import "./ModalSair.css";

/**
 * Componente ModalSair
 * Exibe uma janela de confirmação para o usuário decidir
 * se realmente deseja sair da tela atual.
 *
 * @param {boolean} isOpen - Define se o modal deve estar visível.
 * @param {Function} onClose - Fecha o modal sem executar ação.
 * @param {Function} onConfirm - Confirma a saída (executa a ação principal).
 * @returns {JSX.Element|null} Modal de confirmação de saída.
 */

export default function ModalSair({ isOpen, onClose, onConfirm }) {
  // Se o modal não estiver aberto, não renderiza nada.
  if (!isOpen) return null;

  return (
    <section className="modalOverlay">
      <section className="modalContent">
        <h1 className="title1">Tem certeza que deseja sair?</h1>

        <section className="buttonsContainer">
          {/* Botão de cancelar — fecha o modal */}
          <ActionButton onClick={onClose}>
            CANCELAR
          </ActionButton>

          {/* Botão de sair — confirma a ação e fecha o modal */}
          <ActionButton
            icon={<LogOut size={28} color="white" />}
            onClick={onConfirm}
            className="confirm"
          >
            SAIR
          </ActionButton>
        </section>
      </section>
    </section>
  );
};