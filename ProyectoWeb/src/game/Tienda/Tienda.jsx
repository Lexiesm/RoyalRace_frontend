import React from 'react';
import './Tienda.css';
import escudo from '../../assets/icons/escudo.png';
import espada from '../../assets/icons/espada.png';

// Cómo hacer un pop up básico obtenido de Chatgpt
const PopUpTienda = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h1>Tienda</h1>
        <div className="item-row">
        <div className="item-column">
            <img src={espada} alt="Espada" />
            <p>$50</p>
            <button className='basic-button'>Comprar</button>
        </div>
        <div className="item-column">
            <img src={escudo} alt="Escudo" />
            <p>$50</p>
            <button className='basic-button'>Comprar</button>
        </div>
        </div>
        <button className="close-button" onClick={handleClose}>
          <span className="close-icon">&#10006;</span>
        </button>
      </section>
    </div>
  );
};

export default PopUpTienda;
