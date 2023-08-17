import React from "react";
import Header from "../components/Haeder";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import imgBannerHomePage from "../assets/imgBannerHomePage.png"


function HomePage () {
    return (
        
        <div>
            <Header/>
            <Link to="/" className="footer-content" >
            <img src={imgBannerHomePage} alt="aaa" ></img>
        </Link>
            <Footer/>
        </div>
            
        
    )
}

export default HomePage

