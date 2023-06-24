import React from "react";
import { Link } from "react-router-dom";
import './principal.css'
import LogoutButton from "../../profile/Logout";

export default function Principal(){

    return (
        <main className="principal-content">
        <div className="bg-container"></div>
        <div className="principal-content">
            <h1><span className="nameP">Royal Race</span></h1>
            <h3>
                El juego de estrategia en el cual se debe llegar 
                al centro del tablero antes que tus rivales para 
                ser coronadx 
            </h3>
            <Link className="play-button" to="/principal/sala">
                Iniciar Partida
            </Link>
            <a className="play-button" href="/ver-perfil">
                Ver Perfil
            </a>
            
        </div>
           <LogoutButton />

        </main>
    )
}
