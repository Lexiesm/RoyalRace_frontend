import React, { useState, useEffect } from 'react';
import './Jugadas.css';
import axios from 'axios';


const PopUpJugadas = ({ handleClose, show }) => {
  const [jugadas, setJugadas] = useState([]);

  
  //  ACTUALIZAR RUTA SEGUN ID GAME !
  useEffect(() => {
    const updateJugadas = () => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/plays/1`)
          .then(function (response) {
            setJugadas(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    updateJugadas();
    const interval = setInterval(updateJugadas, 15000);

    return () => {
      clearInterval(interval);
    };
  }, []);   


  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-mainJ">
        <h1>Jugadas</h1>
        <ol>
          {jugadas.map(jugada => (
            <li key={jugada.id}>{jugada.descripcion}</li>
          ))}
        </ol>
        <button className="close-button" onClick={handleClose}>
        <span className="close-icon">&#10006;</span>
        </button>
      </section>
    </div>
  );
};

export default PopUpJugadas;
