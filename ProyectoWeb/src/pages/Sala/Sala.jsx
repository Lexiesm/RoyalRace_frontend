import { Link } from 'react-router-dom';
import './Sala.css'


export default function Sala(){
    return (
        <main className="content">
            <div className="bg-container"></div>
            <div className="content">
                <h3>Elige una opción</h3>
                <Link className="play-button" to="">
                    Crear sala
                </Link>
                <Link className="play-button" to="">
                    Unirse a una sala
                </Link>
                <br></br>

        
            </div>
            <Link className="back-button" to="/principal">
                Volver
            </Link> 
            
        </main>
      )
    }
