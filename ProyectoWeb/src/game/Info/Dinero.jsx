import React, { useState, useEffect } from 'react';
import './Info.css';
import axios from 'axios';
import coin from '../../assets/icons/coin.png';



const Dinero = () => {
  const [Dinero, setDinero] = useState([]);

  
  //  ACTUALIZAR RUTA SEGUN ID player !
  useEffect(() => {
    const updateDinero = () => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/players/1`)
          .then(function (response) {
            setDinero(response.data.dinero);
          })
          .catch(function (error) {
            console.log(error);
          });
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
