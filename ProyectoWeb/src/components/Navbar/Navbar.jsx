import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
        <nav className="navbar">
            <NavLink to="/inicio/" className="logo-display">
                <img src="src/assets/imgs/Crown.jpg" alt="" className="logo-image" /> 
                <span className="name title"> RoyalRace </span>
            </NavLink>
            <ul className="navbar-links-container">
                <li className="navbar-element">
                    <NavLink to="/inicio/" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Home
                    </NavLink>
                </li>
                <li className="navbar-element">
                    <NavLink to="/inicio/principal" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Principal
                    </NavLink>    
                </li>
                <li className="navbar-element"> 
                    <NavLink to="/inicio/about-team" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Team
                    </NavLink>
                </li>
                <li className="navbar-element">
                    <NavLink to="/inicio/Reglas" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Reglas
                    </NavLink>    
                </li>
                
            </ul>
        </nav>
    </header>
  )
}

export default Navbar;