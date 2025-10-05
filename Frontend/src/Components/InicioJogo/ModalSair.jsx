import { LogOut } from 'lucide-react';

import ActionButton from '../../Components/InicioJogo/ActionButton.jsx';

import "./ModalSair.css";

export default function ModalSair({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null; // não renderiza se estiver fechado

    return (
        <section className="modal-overlay">
            <section className="modal-content">
                <h1 className="title1">Tem certeza que deseja sair?</h1>


                <section className="buttons-container">


                    <ActionButton
                        onClick={onClose}>
                        CANCELAR
                    </ActionButton>

                    <ActionButton
                        icon={<LogOut size={28} fill="white" />}
                        onClick={onConfirm}>
                        SAIR
                    </ActionButton>

                </section>



            </section>
        </section>
    );
}
