import React, { useRef } from "react";
import "./Card.css";

export default function Card({ image, title }) {
  const cardRef = useRef(null); // referencia o card para acessr o DOM

  // Movimentação 3D da carta
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    let deltaX = (x - centerX) / centerX; // -1 a 1
    let deltaY = (y - centerY) / centerY; // -1 a 1

    const rotationMax = 15;

    deltaY = -deltaY; // Inverter o eixo Y

    const rotateX = Math.abs(deltaY) * rotationMax;
    const rotateY = deltaX * rotationMax;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  // Voltar à posição neutra quando o mouse sair
  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transition = "transform 0.6s ease";
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  // Remover a transiçao para resposta instantânea ao mover
  const handleMouseEnter = () => {
    const card = cardRef.current;
    card.style.transition = "none";
  };

  return (
    <div
      ref={cardRef}
      className="card3d"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div className="cardContent">
        {/* Imagem do card */}
        <img src={image} alt={title || "Imagem"} className="cardImage" />
        {title && <h2 className="cardTitle">{title}</h2>}
      </div>
    </div>
  );
}