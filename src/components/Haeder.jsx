import React from "react";
import logo from "../assets/logoKasaHaeder.png";
import { Link } from "react-router-dom";


function Header() {
    return (
        <header>
          <div className="haeder-content">
            <img src={logo} alt="Logo de Kasa"/>
       
        <nav>
            <Link className= "link" to="/">Accueil</Link>
            <Link className= "link" to="/about">A Propos</Link>
        </nav>
         </div>
        </header>
        

    )
}

export default Header