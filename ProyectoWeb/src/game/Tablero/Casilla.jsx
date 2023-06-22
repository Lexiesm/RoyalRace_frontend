import React, { useEffect, useState } from "react";
import axios from 'axios';
import aleatorio from '../../assets/icons/aleatorio.png';
import coin from '../../assets/icons/coin.png';
import corazon from '../../assets/icons/corazon.png';
import craneo from '../../assets/icons/craneo.png';
import ladron from '../../assets/icons/ladron.png';
import tesoro from '../../assets/icons/tesoro.png';
import corona from '../../assets/icons/corona.png';

export default function BoxButton({ x, y }) {
  const [imageKey, setImageKey] = useState("");
  const [backgroundImageUrl, setBackgroundImageUrl] = useState("");

  const images = {
    aleatorio,
    coin,
    corazon,
    craneo,
    ladron,
    tesoro,
    corona
  };

  // CAMBIAR LO DE JUEGO 1 !!

  useEffect(() => {
    // Función para obtener y actualizar el tablero
    const updateBoard = () => {
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/boxes/1/${x}/${y}`)
        .then((response) => {
          const data = response.data;
          setImageKey(data.tipo);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    // Actualiza el tablero inicialmente
    updateBoard();

    // Actualiza el tablero cada 5 segundos
    const interval = setInterval(updateBoard, 5000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => {
      clearInterval(interval);
    };
  }, [x, y]); 
  
  useEffect(() => {
    // Actualiza la URL de la imagen cuando cambia la clave
    setBackgroundImageUrl(images[imageKey]);
  }, [imageKey, images]);

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: '80%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
  };

  return (
    <button className="box-button" style={backgroundImageStyle}></button>
  );
  }