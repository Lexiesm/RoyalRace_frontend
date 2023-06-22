import React, { useState, useEffect } from 'react';
import objeto1 from '../../assets/icons/escudo.png';
import objeto2 from '../../assets/icons/espada.png';
import objeto3 from '../../assets/icons/muro.png';
import casilla1 from '../../assets/icons/aleatorio.png';
import casilla2 from '../../assets/icons/coin.png';
import casilla3 from '../../assets/icons/corazon.png';
import casilla4 from '../../assets/icons/craneo.png';
import casilla5 from '../../assets/icons/ladron.png';
import casilla6 from '../../assets/icons/tesoro.png';
import './Rules.css';



export default function Rules() {

    // PARA ROTAR OBJETOS 

    const [objetoActual, setObjetoActual] = useState(1);

    useEffect(() => {
       const intervalo1 = setInterval(() => {
         // Cambiar el ícono actual por el siguiente
         setObjetoActual(objetoActual => (objetoActual === 3 ? 1 : objetoActual + 1));
       }, 4000);
   
       // Limpiar el intervalo al desmontar el componente
       return () => clearInterval(intervalo1);
     }, []);
   
     let objeto;
     let descrip_obj;
     switch (objetoActual) {
       case 1:
         objeto = <img src={objeto1} alt="Escudo" />;
         descrip_obj = "Te puede salvar del ataque de la espada (se rompe luego)";
         break;
       case 2:
         objeto = <img src={objeto2} alt="Espada" />;
         descrip_obj = "Le quitas un corazón de vida al rival";
         break;
      //  case 3:
      //    objeto = <img src={objeto3} alt="Muro" />;
      //    descrip_obj = "Puedes bloquear una casilla al deslizarla sobre esta";
      //    break;
       default:
        objeto = null;
        descrip_obj = null;
     }
    // PARA ROTAR CASILLAS 
    const [casillaActual, setCasillaActual] = useState(1);

    useEffect(() => {
       const intervalo2 = setInterval(() => {
         // Cambiar el ícono actual por el siguiente
         setCasillaActual(casillaActual => (casillaActual === 6 ? 1 : casillaActual + 1));
       }, 4000);
   
       // Limpiar el intervalo al desmontar el componente
       return () => clearInterval(intervalo2);
     }, []);
   
     let casilla;
     let descrip_cas;
     switch (casillaActual) {
       case 1:
        casilla = <img src={casilla1} alt="Aleatoria" />;
        descrip_cas = "Te puede salir cualquier otra casilla";
        break;
       case 2:
        casilla = <img src={casilla2} alt="Moneda" />;
        descrip_cas = "Ganas una cantidad de dinero";
        break;
       case 3:
        casilla = <img src={casilla3} alt="Corazón" />;
        descrip_cas = "Ganas una vida";
        break;
       case 4:
        casilla = <img src={casilla4} alt="Calavera" />;
        descrip_cas = "Pierdes una vida";
        break;
       case 5:
        casilla = <img src={casilla5} alt="Ladrón" />;
        descrip_cas = "Le puedes robar el dinero a un jugador";
        break;
       case 6:
        casilla = <img src={casilla6} alt="Tesoro" />;
        descrip_cas = "Ganas un objeto al azar";
        break;
       default:
        casilla = null;
        descrip_cas = null;
     }

    // PARA ROTAR LAS REGLAS 
    const [ReglaActual, setReglaActual] = useState(0);

    const avanzarTexto = () => {
      setReglaActual(ReglaActual => (ReglaActual === 4 ? 0 : ReglaActual + 1));
    };
    
    const retrocederTexto = () => {
      setReglaActual(ReglaActual => (ReglaActual === 0 ? 4 : ReglaActual - 1));
    };
    const Regla =[
      { titulo: "Objetivo", cuerpo: "El objetivo es llegar al centro del tablero primero, para así obtener la corona."},
      { titulo: "Jugadas", cuerpo: "En cada turno puedes comprar en la tienda, y este se acaba cuando eliges entre utilizar un objeto o avanzar."},
      { titulo: "Movimientos", cuerpo: "Si decides avanzar, sólo puedes moverte hacia arriba, abajo, la izquierda o la derecha, siempre y cuando se esté dentro del tablero."},
      { titulo: "Casillas", cuerpo: "Al pisar una casilla deberás afrontar el evento relacionada a esta.", casilla: casilla, descrip: descrip_cas},
      { titulo: "Objetos", cuerpo: "Cada jugador puede tener hasta 3 objetos. Estos pueden ser utilizados durante tu turno", objeto: objeto, descrip: descrip_obj},

    ];


    return (
      <main>
         <div className= 'rules'>

            <div className= 'tablarules'>
               <div className= 'Elementorules'>
                  <h2>{Regla[ReglaActual].titulo}</h2>
                  <p>{Regla[ReglaActual].cuerpo}</p>
                  <div className= 'componente-variable'>
                    <div className= 'icono'>
                      {Regla[ReglaActual].objeto}
                      {Regla[ReglaActual].casilla}
                    </div>
                    <div>
                      <p>{Regla[ReglaActual].descrip}</p>
                    </div>
                  </div>
                  <button onClick={retrocederTexto}>Anterior</button>
                  <button onClick={avanzarTexto}>Siguiente</button>
               </div>
            </div>

         </div>
      </main>
    );
}
