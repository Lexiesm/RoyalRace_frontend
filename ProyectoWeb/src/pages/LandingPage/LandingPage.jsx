import React from "react";
import { Link } from "react-router-dom";
import icono from '../../assets/imgs/Crown.jpg';
import './landing.css';


export default function LandingPage() {
  return (
    <main className="content">
        <div className="bg-container"></div>
        <div className="content">
            <img src={icono} alt='crown'/>
            <h1><span className="name">Royal Race</span></h1>
            <h3>¿Preparadx para ser coronadx?</h3>
            <Link className="play-button" to="/login">
                Iniciar sesión
            </Link>
            <Link className="play-button" to="/signup">
                Registrarse
            </Link>
            <Link className="play-button" to="/usercheck">
                Verificar scope
            </Link>
            <Link className="play-button" to="/admincheck">
                Verificar admin
            </Link>
            
        </div>
    </main>
  )
}

