import React, { useState, useEffect } from 'react';
import './objetos.css';
import axios from 'axios';
import amarillo from '../../assets/icons/usuario_amarillo.png';
import verde from '../../assets/icons/usuario_verde.png';
import rojo from '../../assets/icons/usuario_rojo.png';
import azul from '../../assets/icons/usuario_azul.png';
import PopUpAlerta from '../Alertas/Alertas';

const PopUpSelecVictim = ({ handleClose, show, selectedId }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const [players, setPlayers] = useState([]);
  const [Id, setId] = useState('');
  const [game, setGame] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

  const headers = {
    Authorization: `Bearer ${token}`
  };

  useEffect(() => {
    const fetchJugadoresataque = async () => {
      try {
        const response1 = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/me`, {headers});
        const userData = response1.data;
        setId(userData.id);

        const juego = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/players/${userData.id}`);
        const DataJuego = juego.data;
        setGame(DataJuego.id_game);

        
        const atacar = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/players/${DataJuego.id_game}/${userData.id}`)
        setPlayers(atacar.data);
        if (Array.isArray(atacar.data)) {
          setPlayers(atacar.data);
        } else {
          console.log('atacar.data is not an array:', atacar.data);
        }
      } catch(error) {
        console.log(error);
      }
    };
    fetchJugadoresataque();
  }, [Id]);


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

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/atacar`, {
      id_game: 1,
      id_objeto: selectedId,
      id_atacante: 1,
      id_afectado: playerId
    })
      .then(function (response) {
        console.log(response.data);
        if (response.data.error) {
          setError(response.data.error);
          setShowPopup(true);
        } else {
          axios.patch(`${import.meta.env.VITE_BACKEND_URL}/games/cambiarTurno/${Id}`);
          handleClose(); // Hace que se cierre el Pop Up
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  }

  return (
    <>
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
      {error && (
        <PopUpAlerta show={showPopup} handleClose={handleTogglePopup}>
          {error}
        </PopUpAlerta>
      )}
    </>
  );
};

export default PopUpSelecVictim;
