import React from 'react';
import './Tablero.css';
import BoxButton from './Casilla';

export default function Tablero() {
    const rows = 9; // Número de filas
    const cols = 9; // Número de columnas
    const buttons = [];
  
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= cols; j++) {
        buttons.push(<BoxButton key={`${i}-${j}`} x={i} y={j} />);
      }
    }
  
    return <main className="tablero-grid">{buttons}</main>;
  }
