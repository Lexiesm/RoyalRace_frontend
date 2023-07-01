import React, { useEffect, useState } from "react";
import './Tienda.css';
import axios from 'axios';
import PopUpAlerta from "../Alertas/Alertas";

export default function BotonTienda({ tipo_objeto, handleClose }) {
  const [data, setData] = useState(null);
  const [IdPlayer, setIdPlayer] = useState("");
  const token = localStorage.getItem('token');
  const [showPopup, setShowPopup] = useState(false);

  const headers = {
    Authorization: `Bearer ${token}`
  };

  useEffect(() => {

    const IdPlayer = async () => {
    try {
      const response1 = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/me`, {headers});
      const userData = response1.data;

      const Player = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/players/user/${userData.id}`);
      const DataPlayer = Player.data;
      setIdPlayer(DataPlayer.id);
    } catch (error) {
      console.log(error);
    }
    };
    IdPlayer();
    });

  const handleClick = () => {

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/objects`, {
       id_player: IdPlayer,
       tipo_objeto: tipo_objeto
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
  }

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  }

  return (
    <>
      <button className="tienda-button" onClick={handleClick}>
        Comprar
      </button>
      {data && data.error && (
        <PopUpAlerta show={showPopup} handleClose={handleTogglePopup}>
          {data.error}
        </PopUpAlerta>
      )}
    </>
  );
}
