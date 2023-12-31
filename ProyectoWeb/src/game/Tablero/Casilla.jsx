import React, { useEffect, useState } from "react";
import axios from 'axios';
import aleatorio from '../../assets/icons/aleatorio.png';
import coin from '../../assets/icons/coin.png';
import corazon from '../../assets/icons/corazon.png';
import craneo from '../../assets/icons/craneo.png';
import ladron from '../../assets/icons/ladron.png';
import tesoro from '../../assets/icons/tesoro.png';
import corona from '../../assets/icons/corona.png';
import amarillo from '../../assets/icons/usuario_amarillo.png';
import verde from '../../assets/icons/usuario_verde.png';
import rojo from '../../assets/icons/usuario_rojo.png';
import azul from '../../assets/icons/usuario_azul.png';
import PopUpAlerta from "../Alertas/Alertas";
import API_URL from '../../../config';

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
    corona,
    amarillo,
    verde,
    rojo,
    azul
  };

  useEffect(() => {

    const updateBoard = async () => {
      const game = await axios.get(`${API_URL}/games`);
      const DataGame = game.data;

      await axios.get(`${API_URL}/boxes/${DataGame.id}/${x}/${y}`)
        .then((response) => {
          const data = response.data;
          setImageKey(data.ruta_img);
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
      const response1 = await axios.get(`${API_URL}/users/me`, {headers});
      const userData = response1.data;

      const Player = await axios.get(`${API_URL}/players/user/${userData.id}`);
      const DataPlayer = Player.data;
      const Idgame = DataPlayer.id_game;
      console.log(DataPlayer.id);

      await axios.post(`${API_URL}/moverse`, {
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
          axios.patch(`${API_URL}/games/cambiarTurno/${Idgame}`);
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