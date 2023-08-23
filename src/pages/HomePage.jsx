import React from "react";
// import { Link } from "react-router-dom";
import imgBannerHomePage from "../assets/imgBannerHomePage.png";
import Cards from "../components/Cards";



function HomePage () {
    return (
        
        <div>
           
            <div className="img-banner-home-page">
            <img src={imgBannerHomePage} alt="Littoral rocheux" ></img>
            <p className="tag">Chez vous, partout et ailleurs</p>
            </div>
                <Cards/>
            </div>
       
            
        
    )
}

export default HomePage

