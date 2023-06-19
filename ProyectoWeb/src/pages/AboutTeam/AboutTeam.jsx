import React from "react";
import './aboutteam.css';
import foto_ignacia from '../../assets/imgs/Ignacia.jpg';
import foto_alex from '../../assets/imgs/Alex.jpg';

export default function AboutTeam(){
    return (
        <main className="content-equipo">
                <div class="ficha">
                    <div class="contenido-ficha">
                        <figure>
                            <img src={foto_ignacia} alt=""/> 
                        </figure>
                        <h3>Ignacia González</h3>
                        <p>Estudiante Ing.Uc major Software</p>
                        <a href="https://github.com/IgnaciaGonzlez">Github</a>
                    </div>
                </div>

                <div class="ficha">
                    <div class="contenido-ficha">
                        <figure>
                            <img src={foto_alex} alt=""/> 
                        </figure>
                        <h3>Alexandra San Martin</h3>
                        <p>Estudiante Ing.Uc major T.I.</p>
                        <a href="https://github.com/Lexiesm">Github</a>
                    </div>
                </div>                
        </main> 
    )
}
