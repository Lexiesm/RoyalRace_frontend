import React from "react";
import { Link } from "react-router-dom";
import './principal.css'

export default function Principal(){
    return (
        <main className="principal-content">
        <div className="bg-container"></div>
        <div className="principal-content">
            <h1><span className="name">Royal Race</span></h1>
            <h3>
                El juego de estrategia en el cual se debe llegar 
                al centro del tablero antes que tus rivales para 
                ser coronadx 
            </h3>
            <Link className="play-button" to="/">
                Iniciar Partida
            </Link>
            <Link className="play-button" to="/">
                Ver Perfil
            </Link>
            
        </div>
    </main>
    )
}
