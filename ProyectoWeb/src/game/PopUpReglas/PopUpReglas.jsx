import React from 'react';
import './PopUpReglas.css';
import Rules from '../Rules/Rules';

const PopUpReglas = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button className="close-button" onClick={handleClose}>
          <span className="close-icon">&#10006;</span>
        </button>
        <Rules></Rules>
      </section>
    </div>
  );
};

export default PopUpReglas;
