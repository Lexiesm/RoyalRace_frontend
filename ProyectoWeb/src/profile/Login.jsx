import React, {useState, useContext} from 'react';
import './Login.css';
import axios from 'axios'; 
import { AuthContext } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import API_URL from '../../config';


function Login() {
    const {token, setToken} = useContext(AuthContext);
    const [correo, setEmail] = useState("");
    const [clave, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("Apretaste el form");   
        // vamos a enviar un post a la ruta login
        axios.post(`${API_URL}/login`,
        {
            correo,
            clave
        }).then((response) => {
            // uno entra y no hay error
            
            setError(false);
            setMsg("Logueaste correctamente"); 

            const access_token = response.data.access_token
            setToken(access_token);

            setTimeout(() => {
                navigate('/principal');
              }, 1500);
        }).catch((error) => {
            setMsg("Contraseña o correo incorrecto"); 
            console.log(error)
        })
    };


    return (
        <div className = "Login">
            {/* esto solo se muestra si la longitud es mayor que 0 */}
            {msg.length > 0 && <div className="successMsg"> {msg} </div>}
            <br></br>
            <form onSubmit = {handleSubmit}>
                <p> Ingresa tus datos para iniciar sesión</p>

                <br></br>
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
                <input type="submit" value="Iniciar sesión" />
            </form>
        </div>
    )
};

export default Login;