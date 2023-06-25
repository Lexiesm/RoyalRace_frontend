import React, { useState, useEffect } from 'react';
import './Info.css';
import axios from 'axios';
import corazon from '../../assets/icons/corazon_verde.png';

const Vidas = () => {
  const [vidas, setVidas] = useState([]);

  // CAMBIAR ID PLAYER
  useEffect(() => {
    const fetchVidas = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/players/1`);
        setVidas(response.data.vidas);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVidas();
    const interval = setInterval(fetchVidas, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderCorazones = () => {
    const corazones = [];

    for (let i = 0; i < vidas; i++) {
      corazones.push(<img src={corazon} alt={""} key={i} />);
    }

    return corazones;
  };

  return (
    <main className='main-vidas'>
      {renderCorazones()}
    </main>
  );
};

export default Vidas;
