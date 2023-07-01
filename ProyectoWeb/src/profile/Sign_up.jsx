import React, {useState, useContext} from 'react';
import './Sign_up.css';
import axios from 'axios'; 
import { AuthContext } from '../auth/AuthContext';
import {useNavigate} from 'react-router-dom';


function Signup() {
    const {token, setToken} = useContext(AuthContext);
    const [nombre, setName] = useState("");
    const [correo, setEmail] = useState("");
    const [clave, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [error, setError] = useState(false);
    
    const navigate = useNavigate();



    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("Apretaste el form");
        // vamos a enviar un post a la ruta login
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/signup`,
        {   
            nombre,
            correo,
            clave
        }).then((response) => {
            // uno entra y no hay error
            console.log("bloque then")
            
            setError(false);
            setMsg("Te registraste correctamente"); 

            const access_token = response.data.access_token; 
            setToken(access_token);


            console.log(response);      
            setTimeout(() => {
                navigate('/principal');
              }, 1500);   
        }).catch((error) => {
            setMsg("Correo ya esta registrado, intente con otro"); 
            console.log(error)
        })
    };


    return (
        <div className = "Signup">
            {/* esto solo se muestra si la longitud es mayor que 0 */}
            {msg.length > 0 && <div className="successMsg"> {msg} </div>}
            <br></br>
            <form onSubmit = {handleSubmit}>
                <p>Para registrarte completa todos los campos</p>
                <br></br>
                <label>
                    Nickname:
                    <input
                        type="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="correo"
                        name="correo"
                        value={correo}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Contraseña:
                    <input
                        type="password"
                        name="clave"
                        value={clave}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </label>
                <input type="submit" value="Registrarme" />
            </form>
        </div>
    )
};

export default Signup;