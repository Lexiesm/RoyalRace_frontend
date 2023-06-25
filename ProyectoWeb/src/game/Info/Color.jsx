import React, { useState, useEffect } from 'react';
import './Info.css';
import axios from 'axios';
import amarillo from '../../assets/icons/usuario_amarillo.png';
import verde from '../../assets/icons/usuario_verde.png';
import rojo from '../../assets/icons/usuario_rojo.png';
import azul from '../../assets/icons/usuario_azul.png';

const ColorJugador = () => {
    const [Color, setColor] = useState([]);

    // CAMBIAR ID PLAYER
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/players/1`)
        .then(function (response) {
            setColor(response.data.color);
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
    
    return (
        <main className='main-color'>
            <img src={getImagen(Color)} alt={Color} />
        </main>
    );
};

export default ColorJugador;
