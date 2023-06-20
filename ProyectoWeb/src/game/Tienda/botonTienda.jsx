import React, { useState } from "react";
import './Tienda.css';
import axios from 'axios';

export default function BotonTienda({ id_player, tipo_objeto }) {
    const [data, setData] = useState(null);

    const handleClick = () => {
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/objects`, {
            id_player: id_player,
            tipo_objeto: tipo_objeto
        })
        .then(function (response) {
            console.log(response.data);
            setData(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <button className="tienda-button" onClick={handleClick}>
            Comprar
        </button>
    );
}
