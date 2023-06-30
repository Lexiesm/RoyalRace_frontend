import React from 'react';
import './PopUpFinal.css';
import amarillo from '../../assets/icons/amarillo_corona.png';
import verde from '../../assets/icons/verde_corona.png';
import rojo from '../../assets/icons/rojo_corona.png';
import azul from '../../assets/icons/azul_corona.png';

const PopUpFinal = ({ estado, handleClose, show }) => {

  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  const getImagen = (color) => {
    switch (color) {
      case 'amarillo':
        return amarillo;
      case 'rojo':
        return rojo;
      case 'verde':
        return verde;
      case 'azul':
        return azul;
      default:
        return null;
    }
  }

  if (estado == 'Terminada'){
    return (
        <div className={showHideClassName}>
          <section className="modal-mainF">
            <h1>Partida Finalizada</h1>
            <p>No hay Ganador</p>
            <button className="close-button" onClick={handleClose} >
            <span className="close-icon">&#10006;</span>
            </button>
          </section>
        </div>
      );
  } else {
    return (
        <div className={showHideClassName}>
          <section className="modal-mainF">
            <h1>Partida Finalizada</h1>
            <p></p>
            <img src={getImagen(estado)}/>
          </section>
        </div>
      );
  }


};

export default PopUpFinal;
