import React from "react";
import logoFooter from "../assets/logoKasaFooter.png";
// import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer>
        <div className="footer-content" >
            <img src={logoFooter} alt="Logo de Kasa" ></img>
         <p> &copy; 2020 Kasa. All rights reserved</p>
         </div>
         </footer>
    )
}

export default Footer