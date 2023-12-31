import React, { useState, useEffect } from 'react';
import './Info.css';
import axios from 'axios';
import amarillo from '../../assets/icons/usuario_amarillo.png';
import verde from '../../assets/icons/usuario_verde.png';
import rojo from '../../assets/icons/usuario_rojo.png';
import azul from '../../assets/icons/usuario_azul.png';
import API_URL from '../../../config';


const TurnoActual = () => {
  const [TurnoActual, setTurnoActual] = useState([]);
  const [idgame, setIdGame] = useState("");
  const [id, setId] = useState("");

  const token = localStorage.getItem('token');

  const headers = {
    Authorization: `Bearer ${token}`
  };

  
  //  ACTUALIZAR RUTA SEGUN ID GAME !
  useEffect(() => {
    const updateTurnoActual = async () => {
      try {
        const response = await axios.get(`${API_URL}/users/me`, {headers});
        const userData = response.data;

        setId(userData.id);

        const player = await axios.get(`${API_URL}/players/user/${userData.id}`)
        const idGame = player.data;
        setIdGame(idGame.id_game);

        const juego = await axios.get(`${API_URL}/games/${idGame.id_game}`)
        setTurnoActual(juego.data);
        
      } catch (error) {
        console.log(error);
      }

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
