import React from "react";
import logoFooter from "../assets/images/logoKasaFooter.png";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <img src={logoFooter} alt="Logo de Kasa"></img>
        <p> &copy; 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
