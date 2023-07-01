import React, { useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './VerPerfil.css'
import API_URL from '../../../config';

export default function VerPerfil() {
  const [nombre, setNombre] = useState("");
  const [partidasGanadas, setPartidasGanadas] = useState("");
  const [partidasTotales, setPartidasTotales] = useState("");

    const token = localStorage.getItem('token');

    const headers = {
    Authorization: `Bearer ${token}`
    };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${API_URL}/users/me`, {headers});
        const userData = response.data;
        setNombre(userData.nombre);
        setPartidasGanadas(userData.partidasGanadas);
        setPartidasTotales(userData.partidasTotales);
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [token]);

  return (
    <main className="content-equipo">
      <div className="ficha">
        <div className="contenido-ficha">
          <h1>Mi Perfil</h1>
          <h2>Nombre:</h2>
          <p>{nombre}</p>
          <h2>Partidas Ganadas:</h2>
          <p>{partidasGanadas}</p>
          <h2>Partidas Totales:</h2>
          <p>{partidasTotales}</p>

        </div>
      </div>

      <div>
        <Link className="back-button" to="/principal">
          Volver
        </Link>
      </div>
    </main>
  );
}