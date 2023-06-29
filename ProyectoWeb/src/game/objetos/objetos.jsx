import React, { useState, useEffect } from 'react';
import './objetos.css';
import axios from 'axios';
import escudo from '../../assets/icons/escudo.png';
import espada from '../../assets/icons/espada.png';
import PopUpSelecVictim from './PopUpSelecVictim';

const Objetos = () => {
  const [objetos, setObjetos] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const token = localStorage.getItem('token');

  const headers = {
    Authorization: `Bearer ${token}`
  };

  useEffect(() => {
      const updateObjects = async () => {
        try {
          
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/me`, {headers});
        const userData = response.data;

        const player = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/players/user/${userData.id}`);

        const objectos = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/objects/${player.data.id}`)
        setObjetos(objectos.data)  

        } catch (error) {
          console.log(error);
        }
  
    };

    // Actualiza los objetos inicialmente
    updateObjects();

    // Actualiza los objetos cada 5 segundos
    const interval = setInterval(updateObjects, 5000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => {
      clearInterval(interval);
    };
  }, [objetos]);   

  const getImagen = (tipo) => {
    switch (tipo) {
      case 'escudo':
        return escudo;
      case 'espada':
        return espada;
      default:
        return null;
    }
  }

  const handleEspadaClick = (id) => {
    setSelectedId(id);
    setShowPopUp(true);
  }

  const handleClose = () => {
    setShowPopUp(false);
  }

  return (
    <div>
      <section className="main-oj">
        <h1>Objetos</h1>
        {objetos.map(objeto => (
          <div key={objeto.id}>
            {objeto.tipo === 'espada' ? (
              <img src={getImagen(objeto.tipo)} alt={objeto.tipo} onClick={() => handleEspadaClick(objeto.id)} />
            ) : (
              <img src={getImagen(objeto.tipo)} alt={objeto.tipo} />
            )}
            <p>{objeto.descripcion}</p>
          </div>
        ))}
      </section>
      <PopUpSelecVictim show={showPopUp} handleClose={handleClose} selectedId={selectedId} />
    </div>
  );
};

export default Objetos;
