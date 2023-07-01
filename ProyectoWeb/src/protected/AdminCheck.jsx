import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { AuthContext } from "../auth/AuthContext";
import API_URL from '../../config';

function AdminCheck () {
    const {token} = useContext(AuthContext);
    const [msg, setMsg] = useState("");

    const config = {
        'method' : 'get',
        'url': `${API_URL}/scope-example/protectedadmin`,
        'headers': {
            'Authorization' : `Bearer ${token}`
        }
    };

    useEffect(() => {
        axios(config).then((response) => {
            console.log("Enviaste un buen token, estas logeado y eres admin!!!");
            console.log(response);
            setMsg(response.data.message);
        }).catch((error) => {
            console.log("Hubo un error no estas logeado/ el token expiró/ no eres admin");
            console.log(error);
            setMsg(error.message);
        })
    }, [])

    return (
        <h1>{msg}</h1>
    )
}

export default AdminCheck;