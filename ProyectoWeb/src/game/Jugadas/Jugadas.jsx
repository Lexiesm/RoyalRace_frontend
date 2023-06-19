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
        <button className="close-button" onClick={handleClose}>
            <span className="close-icon">&#10006;</span>
        </button>
      </section>
    </div>
  );
};

export default PopUpJugadas;