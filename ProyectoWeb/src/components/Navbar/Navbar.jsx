import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from '../../auth/AuthContext';

function Navbar() {
    const {token, setToken} = useContext(AuthContext);
  return (
    <header>
        <nav className="navbar">
            <NavLink to="/inicio/" className="logo-display">
                <img src="src/assets/imgs/Crown.jpg" alt="" className="logo-image" /> 
                <span className="name title"> RoyalRace </span>
            </NavLink>
            <ul className="navbar-links-container">
                <li className="navbar-element">
                    <NavLink to="" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Home
                    </NavLink>
                </li>
                <li className="navbar-element"> 
                    <NavLink to="/about-team" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Team
                    </NavLink>
                </li>
                <li className="navbar-element">
                    <NavLink to="/Reglas" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Reglas
                    </NavLink>    
                </li>

                
        {token !== null ? (
          <>
            <li className="navbar-element">
              <NavLink
                to="/principal"
                className={({ isActive }) => (isActive ? "navbar-link name" : "navbar-link")}
              >
                Principal
              </NavLink>
            </li>
          </>
        ) : null}
                

            </ul>
        </nav>
    </header>
  )
}

export default Navbar;