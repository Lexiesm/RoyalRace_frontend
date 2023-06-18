import React, { useEffect, useState} from "react";
import './VerPerfil.css'
import axios from 'axios';


export default function VerPerfil(){
    const [nombre, SetNombre] = useState("");
    const [partidasGanadas, SetPartidasGanadas] = useState("");
    const [partidasTotales, SetPartidasTotales] = useState("");

    // Pendiente: cambiar id en url del get cuando exista el manejo de usuario 
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/1`)
            .then((response) => {
                const data = response.data;
                SetNombre(data.nombre);
                SetPartidasGanadas(data.partidas_ganadas);
                SetPartidasTotales(data.partidas_totales);
            }).catch((error) => {
                console.log(error);
            });

    });

    return (
        <main className="content-equipo">
                <div class="ficha">
                    <div class="contenido-ficha">
                        <h1>Mi Perfil</h1>
                        <h2>Nombre:</h2>
                        <p>{nombre}</p>
                        <h2>Partidas Ganadas:</h2>
                        <p>{partidasGanadas}</p>
                        <h2>Partidas Totales:</h2>
                        <p>{partidasTotales}</p>
                    </div>
                </div>          
        </main> 
    )
}
