import React, {useContext, useState} from 'react';
import './Logout.css';
import { AuthContext } from '../auth/AuthContext';
import {useNavigate} from 'react-router-dom';

const LogoutButton = () => {
    const {logout} = useContext(AuthContext);
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        setMsg("Has cerrado sesión exitosamente")

        setTimeout(() => {
            navigate('/');
          }, 1500);   
    }

    return (
        <>
            {msg.length > 0 && <div className="successMsg"> {msg} </div>}
            <button onClick={handleLogout}>
            Cerrar sesión
            </button>
        </>
    );
}

export default LogoutButton;
