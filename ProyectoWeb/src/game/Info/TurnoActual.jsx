import React, { useState, useEffect } from 'react';
import './Info.css';
import axios from 'axios';
import amarillo from '../../assets/icons/usuario_amarillo.png';
import verde from '../../assets/icons/usuario_verde.png';
import rojo from '../../assets/icons/usuario_rojo.png';
import azul from '../../assets/icons/usuario_azul.png';


const TurnoActual = () => {
  const [TurnoActual, setTurnoActual] = useState([]);

  
  //  ACTUALIZAR RUTA SEGUN ID GAME !
  useEffect(() => {
    const updateTurnoActual = () => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/games/1`)
          .then(function (response) {
            setTurnoActual(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    updateTurnoActual();
    const interval = setInterval(updateTurnoActual, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);   

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

  return (
    <main className='main-turno-actual'>
        <h1>Turno:</h1>
        <img src={getImagen(TurnoActual.turno_actual)} alt={TurnoActual.turno_actual} />
    </main>
  );
};

export default TurnoActual;
