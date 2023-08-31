import React from "react";
import logo from "../assets/images/logoKasaHaeder.png";
import { Link, useLocation } from "react-router-dom";

// className="link"className="link"
function Header() {
  const location = useLocation();
  return (
    <header>
      <div className="haeder-content">
        <img src={logo} alt="Logo de Kasa" />
        {/* ? "selected" : ""} */}
        <nav>
          <Link
            to="/"
            className={location.pathname === "/" ? "link selected" : "link"}
          >
            Accueil
          </Link>
          <Link
            to="/about"
            className={
              location.pathname === "/about" ? "link selected" : "link"
            }
          >
            A Propos
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
