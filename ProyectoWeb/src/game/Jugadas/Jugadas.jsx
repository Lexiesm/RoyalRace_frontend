import React, { useState, useEffect } from 'react';
import './Jugadas.css';
import axios from 'axios';
import API_URL from '../../../config';


const PopUpJugadas = ({ handleClose, show }) => {
  const [jugadas, setJugadas] = useState([]);

  
  //  ACTUALIZAR RUTA SEGUN ID GAME !
  useEffect(() => {
    const updateJugadas = async () => {

      try{
        const juego = await axios.get(`${API_URL}/games`);
        const respuesta = await axios.get(`${API_URL}/plays/${juego.data.id}`);
        setJugadas(respuesta.data);
      } catch (error){
        console.log(error);
      }
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
