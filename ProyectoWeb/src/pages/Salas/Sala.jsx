import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './Sala.css';
import axios from 'axios';

export default function Sala() {
    const [id, setId] = useState("");
    const token = localStorage.getItem('token');
    const headers = {
        Authorization: `Bearer ${token}`
    };

    const handleCrearSala = async () => {
        try {        
            const response1 = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/me`, {headers});
            const userData = response1.data;
            const id = userData.id;

        
            const playerData = {
                id_user: id,
                id_game: 1,
                color: "rojo",
                vidas: 3,
                dinero: 50
            };
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/players`, playerData);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className="content">
            <div className="bg-container"></div>
            <div className="content">
                <h3>Elige una opción</h3>
                <Link className="play-button" to="/principal/sala/crear_sala" onClick={handleCrearSala}>
                    Crear sala
                </Link>
                <Link className="play-button" to="/principal/sala/sala_creada">
                    Unirse a una sala
                </Link>
                <br />
            </div>
            <Link className="back-button" to="/principal">
                Volver
            </Link>
        </main>
    );
}