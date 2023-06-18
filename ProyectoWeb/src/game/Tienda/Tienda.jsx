import React from 'react';
import './Tienda.css';
import Rules from '../Rules/Rules';

// Cómo hacer un pop up básico obtenido de Chatgpt
const PopUpTienda = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <Rules></Rules>
        <button className="basic-button" onClick={handleClose}>Cerrar</button>
      </section>
    </div>
  );
};

export default PopUpTienda;
