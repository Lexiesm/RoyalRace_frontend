import React, { useState, useEffect } from 'react';
import './objetos.css';
import axios from 'axios';
import amarillo from '../../assets/icons/usuario_amarillo.png';
import verde from '../../assets/icons/usuario_verde.png';
import rojo from '../../assets/icons/usuario_rojo.png';
import azul from '../../assets/icons/usuario_azul.png';

const PopUpSelecVictim = ({ handleClose, show, selectedId }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const [players, setPlayers] = useState([]);

  /*
  useEffect(() => {
    const updateObjects = () => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/players/1/1`)
          .then(function (response) {
            setPlayers(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    // Actualiza los objetos inicialmente
    updateObjects();

    // Actualiza los objetos cada 5 segundos
    const interval = setInterval(updateObjects, 5000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => {
      clearInterval(interval);
    };
  }, []);   
  */



  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/players/1/1`)
      .then(function (response) {
        setPlayers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
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
  
  // Pendiente cambiar id_game y id_atacante 
  const handleClick = (selectedId, playerId) => {
    console.log(`objeto ${selectedId}  y player ${playerId}`);
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/atacar`, {
        id_game: 1,
        id_objeto: selectedId,
        id_atacante: 1,
        id_afectado: playerId
   })
    .then(function (response) {
        console.log(response.data);
        handleClose(); // Hace que se cierre el Pop Up
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-mainO">
        <h1>Selecciona una víctima</h1>
        {players.map(player => (
        <div key={player.id}>
            <img className="img-player" src={getImagen(player.color)} alt={player.color} onClick={() => handleClick(selectedId, player.id)} />
        </div>
        ))}
        <button className="close-button" onClick={handleClose}>
            <span className="close-icon">&#10006;</span>
        </button>
      </section>
    </div>
  );
};

export default PopUpSelecVictim;
