import React, { useState, useEffect } from 'react';
import icono1 from '../assets/icons/aleatorio.png';
import icono2 from '../assets/icons/coin.png';
import icono3 from '../assets/icons/corazon.png';
import icono4 from '../assets/icons/craneo.png';
import icono5 from '../assets/icons/escudo.png';
import icono6 from '../assets/icons/espada.png';
import icono7 from '../assets/icons/ladron.png';
import icono8 from '../assets/icons/muro.png';
import icono9 from '../assets/icons/tesoro.png';
import './Rules.css';



export default function Rules() {
   
   const [iconoActual, setIconoActual] = useState(1);

   useEffect(() => {
      const intervalo = setInterval(() => {
        // Cambiar el ícono actual por el siguiente
        setIconoActual(iconoActual => (iconoActual === 9 ? 1 : iconoActual + 1));
      }, 1500);
  
      // Limpiar el intervalo al desmontar el componente
      return () => clearInterval(intervalo);
    }, []);
  
    let icono;
    switch (iconoActual) {
      case 1:
        icono = <img src={icono1} alt="Icono 1" />;
        break;
      case 2:
        icono = <img src={icono2} alt="Icono 2" />;
        break;
      case 3:
        icono = <img src={icono3} alt="Icono 3" />;
        break;
      case 4:
        icono = <img src={icono4} alt="Icono 4" />;
        break;
      case 5:
        icono = <img src={icono5} alt="Icono 5" />;
        break;
      case 6:
        icono = <img src={icono6} alt="Icono 6" />;
        break;
      case 7:
        icono = <img src={icono7} alt="Icono 7" />;
        break;
      case 8:
        icono = <img src={icono8} alt="Icono 8" />;
        break;
      case 9:
        icono = <img src={icono9} alt="Icono 9" />;
        break;
      default:
        icono = null;
    }
  
    return (
      <main>
         <div className= 'icono'>
            {icono}
         </div>
         <div className= 'rules'>
            <h1>¿Cómo jugar?</h1>

            <div className= 'tablarules'>
               <div className= 'Elementorules'>
                  <h2>Objetivo</h2>
                  <p>El objetivo es llegar al centro del tablero primero, para así obtener la corona. ​</p>
               </div>
            </div>

         </div>
      </main>
    );
}


