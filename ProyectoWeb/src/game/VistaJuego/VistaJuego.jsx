import React, { useState } from 'react';
import PopUpJugadas from '../Jugadas/Jugadas';
import PopUpReglas from '../PopUpReglas/PopUpReglas';
import PopUpTienda from '../Tienda/Tienda';
import Tablero from '../Tablero/Tablero';

import './VistaJuego.css';

const VistaJuego = () => {
  const [showPopupJugadas, setShowPopupJugadas] = useState(false);
  const [showPopupReglas, setShowPopupReglas] = useState(false);
  const [showPopupTienda, setShowPopupTienda] = useState(false);

  const togglePopupJugadas = () => {
    setShowPopupJugadas(!showPopupJugadas);
  };
  const togglePopupReglas = () => {
    setShowPopupReglas(!showPopupReglas);
  };
  const togglePopupTienda = () => {
    setShowPopupTienda(!showPopupTienda);
  };

  return (
    <main>
    <div>
      <button className="basic-button" onClick={togglePopupJugadas}>Ver Jugadas</button>
      <PopUpJugadas show={showPopupJugadas} handleClose={togglePopupJugadas}>
      </PopUpJugadas>

      <button className="basic-button" onClick={togglePopupReglas}>Reglas</button>
      <PopUpReglas show={showPopupReglas} handleClose={togglePopupReglas}>
      </PopUpReglas>

      <button className="basic-button" onClick={togglePopupTienda}>Tienda</button>
      <PopUpTienda show={showPopupTienda} handleClose={togglePopupTienda}>
      </PopUpTienda>
    </div>
    <div>
      <Tablero/>
    </div>
    </main>
  );
};

export default VistaJuego;
