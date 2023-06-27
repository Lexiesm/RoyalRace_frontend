import React, { useEffect, useState } from "react";
import axios from 'axios';
import usuarioRojo from '../../assets/icons/usuario_rojo.png';
import usuarioAmarillo from '../../assets/icons/usuario_amarillo.png';
import usuarioVerde from '../../assets/icons/usuario_verde.png';
import usuarioAzul from '../../assets/icons/usuario_azul.png';
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

  useEffect(() => {
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

    updateBoard();

    const interval = setInterval(updateBoard, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [x, y]);

  useEffect(() => {
    let imageUrl = images[imageKey];

    // Asignar los iconos de los jugadores a las casillas correspondientes
    if ((x === 1 && y === 1) || (x === 1 && y === 9) || (x === 9 && y === 1) || (x === 9 && y === 9)) {
      if (x === 1 && y === 1) {
        imageUrl = usuarioRojo;
      } else if (x === 1 && y === 9) {
        imageUrl = usuarioAmarillo;
      } else if (x === 9 && y === 1) {
        imageUrl = usuarioVerde;
      } else if (x === 9 && y === 9) {
        imageUrl = usuarioAzul;
      }
    }

    setBackgroundImageUrl(imageUrl);
  }, [imageKey, images, x, y]);

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: '80%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
  };

  return <button className="box-button" style={backgroundImageStyle}></button>;
}