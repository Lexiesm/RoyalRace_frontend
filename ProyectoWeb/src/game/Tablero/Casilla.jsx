import React, { useEffect, useState} from "react";
import axios from 'axios';
import aleatorio from '../../assets/icons/aleatorio.png';
import coin from '../../assets/icons/coin.png';
import corazon from '../../assets/icons/corazon.png';
import craneo from '../../assets/icons/craneo.png';
import ladron from '../../assets/icons/ladron.png';
import tesoro from '../../assets/icons/tesoro.png';
import corona from '../../assets/icons/corona.png';

export default function BoxButton({ x, y }) {
    const [ImageKey, SetImageKey] = useState("");
    const [BackgroundImageUrl, SetBackgroundImageUrl] = useState("");

    const images = {
        aleatorio,
        coin,
        corazon,
        craneo,
        ladron,
        tesoro,
        corona
    };

    // Pendiente: cambiar id del game !! 
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/boxes/1/${x}/${y}`)
            .then((response) => {
                const data = response.data;
                SetImageKey(data.tipo);
                SetBackgroundImageUrl(images[ImageKey]);
            }).catch((error) => {
                console.log(error);
            });

    });

    const backgroundImageStyle = {
        backgroundImage: `url(${BackgroundImageUrl})`,
        backgroundSize: '80%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
    };

  return (
    <button className="box-button" style={backgroundImageStyle}>
     
    </button>
  );
}

