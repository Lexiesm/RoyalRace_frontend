import React from 'react';
import './Tablero.css';

export default function BoxButton({ x, y, image }) {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundColor: 'black',
  };

  return (
    <button className="box-button" style={backgroundImageStyle}>
    </button>
  );
}