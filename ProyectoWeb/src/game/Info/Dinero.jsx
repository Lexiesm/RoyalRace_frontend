import React, { useState, useEffect } from 'react';
import './Info.css';
import axios from 'axios';
import coin from '../../assets/icons/coin.png';



const Dinero = () => {
  const [Dinero, setDinero] = useState([]);
  const [Id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const token = localStorage.getItem('token');

  const headers = {
    Authorization: `Bearer ${token}`
  };

  useEffect(() => {
    const updateDinero = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/me`, {headers});
        const userData = response.data;
        setId(userData.id);
        setNombre(userData.nombre);

        const playe = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/players/${userData.id}`)
        setDinero(playe.dinero);
      } catch (error) {
        console.log(error);
      }

    };

    updateDinero();
    const interval = setInterval(updateDinero, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);   


  return (
    <main className='main-dinero'>
        <img src={coin} alt={"Dinero:"} />
        <h1>{Dinero}</h1>
    </main>
  );
};

export default Dinero;
