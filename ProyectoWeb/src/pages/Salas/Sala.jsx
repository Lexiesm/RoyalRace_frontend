import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './Sala.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Sala() {

    const navigate = useNavigate();


    const [Id, setId] = useState("");
    const [availableColors, setAvailableColors] = useState(["rojo", "verde", "azul", "amarillo"]);
    const [coloresDisponibles, setColoresDisponibles] = useState(true);
    const [salaLlena, setSalaLlena] = useState(false);
    const token = localStorage.getItem('token');
    const headers = {
        Authorization: `Bearer ${token}`
    };

    useEffect(() => {
        const fetchExistingPlayers = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/players`);
                const existingPlayers = response.data;
                const occupiedColors = existingPlayers.map(player => player.color);
                const remainingColors = availableColors.filter(color => !occupiedColors.includes(color));
                setAvailableColors(remainingColors);
                setColoresDisponibles(remainingColors.length > 0);
                setSalaLlena(remainingColors.length === 0);
            } catch (error) {
                console.log(error);
            }
        };

        fetchExistingPlayers();
    }, []);


    const handleUnirseSala = async () => { 
        let IdDataJuego = "";
        try {
            
            if (!coloresDisponibles) {
                alert("La sala está llena");
                return;
            } else {
            const response1 = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/me`, {headers});
            const userData = response1.data;
            const id = userData.id;
            console.log(id);
        
                if (availableColors[0] === "rojo") { 

                    const TurnoActual = {
                        turno_actual: "rojo"
                    }
                    const juego = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/games`, TurnoActual);
                    IdDataJuego = juego.data.id;    
                    
                    const Datos = {
                        id_game: IdDataJuego
                    }
                    
                    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/boxes`, Datos);          

                } else {
                    const juego = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/games`);
                    IdDataJuego = juego.data.id;
                }
 


            const playerData = {
                id_user: id,
                id_game: IdDataJuego,
                color: availableColors[0], // Asignar el primer color disponible
                vidas: 3,
                dinero: 50
            }
        
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/players`, playerData);
            navigate('/principal/sala/crear_sala');
        
        };
          

        } catch (error) {
            console.log(error);
        }  
    };

    return (
        <main className="content">
            <div className="bg-container"></div>
            <div className="content">
                <h3>Elige una opción</h3>
                { salaLlena && <p>La sala está llena</p> }
                {/* <Link className="play-button"  onClick={handleCrearSala}>
                    Crear sala
                </Link> */}
                <Link className="play-button" onClick={handleUnirseSala}>
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