import React from "react";
import { Link } from "react-router-dom";
import './landing.css'

export default function LandingPage() {
  return (
    <main className="content">
        <div className="bg-container"></div>
        <div className="content">
            <h1><span className="name">Royal Race</span></h1>
            <h3>¿Preparadx para ser coronado?</h3>
            <Link className="play-button" to="/">
                Iniciar sesión
            </Link>
            <Link className="play-button" to="/">
                Registrarse
            </Link>
            
        </div>
    </main>
  )
}
