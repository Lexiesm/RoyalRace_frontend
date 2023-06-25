import React from 'react';
import './Alertas.css';

const PopUpAlerta = ({  children, handleClose, show }) => {

  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-mainA">
        <h1>Alerta</h1>
        <p>{children}</p>
        <button className="close-button" onClick={handleClose}>
        <span className="close-icon">&#10006;</span>
        </button>
      </section>
    </div>
  );
};

export default PopUpAlerta;
