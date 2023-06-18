import React from 'react';
import './Tablero.css';

export default function BoxButton({ x, y }) {
    const backgroundImageStyle = {
      backgroundImage: '../../assets/icons/tesoro.png',
      backgroundSize: 'cover',
      backgroundColor: 'black',
    };
  
    return (
      <button className="box-button" style={backgroundImageStyle}>
        {x},{y}
      </button>
    );
  }
  
