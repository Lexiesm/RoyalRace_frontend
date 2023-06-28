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
import PopUpAlerta from "../Alertas/Alertas";


export default function BoxButton({ x, y }) {
  const [data, setData] = useState(null);
  const [imageKey, setImageKey] = useState("");
  const [backgroundImageUrl, setBackgroundImageUrl] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const token = localStorage.getItem('token');


  
  const headers = {
    Authorization: `Bearer ${token}`
  };

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

    const updateBoard = async () => {
      const game = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/games`);
      const DataGame = game.data;

      await axios.get(`${import.meta.env.VITE_BACKEND_URL}/boxes/${DataGame.id}/${x}/${y}`)
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

  const Moverse = async () => {
    try {
      const response1 = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/me`, {headers});
      const userData = response1.data;

      const Player = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/players/user/${userData.id}`);
      const DataPlayer = Player.data;
      console.log(DataPlayer.id);

      // const DatosMoverse = {
      //   id_player: DataPlayer.id,
      //   x: x,
      //   y: y
      // }

      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/moverse`, {
        id_player: DataPlayer.id,
        x: x,
        y: y
      })
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
        if (response.data.error) {
          setShowPopup(true);
        } else {
          handleClose();
        }
      })
      .catch(function (error) {
        console.log(error);
      });


    } catch (error) {
      console.log(error);
    }

  }

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  }


  return (
  <>
  <button className="box-button" onClick={Moverse} style={backgroundImageStyle}></button>
    {data && data.error && (
        <PopUpAlerta show={showPopup} handleClose={handleTogglePopup}>
          {data.error}
        </PopUpAlerta>
      )}
  </>
)};