import React from "react";
import { Link } from "react-router-dom";
import error404 from "../assets/error404.png"


function Error() {
    return (
        <div className="error-content">   
            <div className="error404" >
            <img src={error404} alt="aaa" ></img>
            </div>
            <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
            <Link className= "link" to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}
 
export default Error