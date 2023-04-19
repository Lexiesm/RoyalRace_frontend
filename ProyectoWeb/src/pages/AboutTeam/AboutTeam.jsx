import React from "react";
import './aboutteam.css'

export default function AboutTeam(){
    return (
        <main className="content-equipo">
                <div class="ficha">
                    <div class="contenido-ficha">
                        <figure>
                            <img src="src/assets/imgs/Ignacia.jpg" alt=""/> 
                        </figure>
                        <h3>Ignacia González</h3>
                        <p>Estudiante Ing.Uc major Software</p>
                        <a href="https://github.com/IgnaciaGonzlez">Github</a>
                    </div>
                </div>

                <div class="ficha">
                    <div class="contenido-ficha">
                        <figure>
                            <img src="src/assets/imgs/Alex.jpg" alt=""/> 
                        </figure>
                        <h3>Alexandra San Martin</h3>
                        <p>Estudiante Ing.Uc major T.I.</p>
                        <a href="https://github.com/Lexiesm">Github</a>
                    </div>
                </div>                
        </main> 
    )
}
