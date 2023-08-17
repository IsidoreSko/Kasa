import React from "react";
import logo from "../assets/logoKasaHaeder.png";
import { Link } from "react-router-dom";


function Header() {
    return (
        <header>
          <Link to ="/" className="haeder-content">
            <img src={logo} alt="Logo de Kasa"/>
        </Link>
        {/* <nav>
            <link to="/">Accueil</link>
            <link to="../pages/About">A Propos</link>
        </nav> */}
        
        </header>
        

    )
}

export default Header