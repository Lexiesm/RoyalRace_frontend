import React from 'react';
import './Jugadas.css';

// Cómo hacer un pop up básico obtenido de Chatgpt
const PopUpJugadas = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h1>Jugadas</h1>
        <h1>Jugadas</h1>
        <h1>Jugadas</h1>
        <h1>Jugadas</h1>
        <h1>Jugadas</h1>
        <h1>Jugadas</h1>
        <h1>Jugadas</h1>
        <h1>Jugadas</h1>
        <h1>Jugadas</h1>
        <h1>Jugadas</h1>
        <h1>Jugadas</h1>
        <h1>Jugadas</h1>
        <h1>Jugadas</h1>
        <h1>Jugadas</h1>        
        <h1>Jugadas</h1>
        <h1>Jugadas</h1>
        <h1>Jugadas</h1>
        <h1>Jugadas</h1>
        <h1>Jugadas</h1>
        <h1>Jugadas</h1>
        <button className="basic-button" onClick={handleClose}>Cerrar</button>
      </section>
    </div>
  );
};

export default PopUpJugadas;
