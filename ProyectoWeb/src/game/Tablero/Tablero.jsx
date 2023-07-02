import React, { useState } from 'react';
import './Tablero.css';
import BoxButton from './Casilla';

export default function Tablero() {
  const [update, setUpdate] = useState(false);
  const rows = 9; // Número de filas
  const cols = 9; // Número de columnas
  const buttons = [];

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      buttons.push(<BoxButton key={`${i}-${j}`} x={i} y={j} update={update} setUpdate={setUpdate} />);
    }
  }

  return (
    <>
      <button className='basic-button' onClick={() => setUpdate(true)}>Actualizar Tablero</button>

      <main className="tablero-grid">
        {buttons}
      </main>
    </>

  );
}