import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Crear_sala.css';
import axios from 'axios';
import usuarioRojo from '../../assets/icons/usuario_rojo.png';
import usuarioAmarillo from '../../assets/icons/usuario_amarillo.png';
import usuarioVerde from '../../assets/icons/usuario_verde.png';
import usuarioAzul from '../../assets/icons/usuario_azul.png';
import API_URL from '../../../config';

const Crear_sala = () => {
  const [id, setId] = useState("");
  const [color, setColor] = useState("");
  const [idgame, setIdGame] = useState("");
  const [jugadores, setJugadores] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const headers = {
    Authorization: `Bearer ${token}`
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${API_URL}/users/me`, {headers});
        const userData = response.data;

        setId(userData.id);

        const player = await axios.get(`${API_URL}/players/user/${userData.id}`)
        const playe = player.data;
        setIdGame(playe.id_game);
        setColor(playe.color);
        setLoading(false);

      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [token]);

  useEffect(() => {
    const fetchJugadoresData = async () => {
      try {
        const response = await axios.get(`${API_URL}/players`);
        const jugadoresData = response.data;
        setJugadores(jugadoresData);

        if (jugadoresData.length === 4) {
          setTimeout(() => {
            navigate("/game");
          }, 2000);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchJugadoresData();

    const interval = setInterval(fetchJugadoresData, 500);
    return () => clearInterval(interval);

  }, [idgame, navigate]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="center">
      <div className="square">
        <div className="number"></div>
        <div className="jugadores">
          {jugadores.map((jugador) => (
            <div key={jugador.id} className="jugador">
              {jugador.color === "rojo" && <img src={usuarioRojo} alt="Usuario Rojo" />}
              {jugador.color === "amarillo" && <img src={usuarioAmarillo} alt="Usuario Amarillo" />}
              {jugador.color === "verde" && <img src={usuarioVerde} alt="Usuario Verde" />}
              {jugador.color === "azul" && <img src={usuarioAzul} alt="Usuario Azul" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crear_sala;