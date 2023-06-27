import React, { useState, useEffect } from 'react';
import './Info.css';
import axios from 'axios';
import amarillo from '../../assets/icons/usuario_amarillo.png';
import verde from '../../assets/icons/usuario_verde.png';
import rojo from '../../assets/icons/usuario_rojo.png';
import azul from '../../assets/icons/usuario_azul.png';

const ColorJugador = () => {
    const [Color, setColor] = useState([]);
    const [Id, setId] = useState("");
    const token = localStorage.getItem('token');
    const headers = {
        Authorization: `Bearer ${token}`
      };

    // CAMBIAR ID PLAYER
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/me`, {headers});
                const userData = response.data;
                setId(userData.id);

                const player = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/players/${userData.id}`)
                const playe = player.data
                setColor(playe.color);
                } catch (error) {
                    console.log(error);
                }
            }
            fetchUserData()
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
        <main className='main-color'>
            <img src={getImagen(Color)} alt={Color} />
        </main>
    );
};

export default ColorJugador;
