import React, { useState } from "react";
import './Tienda.css';
import axios from 'axios';
import PopUpAlerta from "../Alertas/Alertas";

export default function BotonTienda({ id_player, tipo_objeto, handleClose }) {
  const [data, setData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/objects`, {
      id_player: id_player,
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
