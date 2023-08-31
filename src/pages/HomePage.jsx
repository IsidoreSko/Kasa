import React from "react";
import imgBannerHomePage from "../assets/images/imgBannerHomePage.png";
import dataHousings from "../assets/data/housingListings.json";
import Card from "../components/Card";

function HomePage() {
  return (
    <div>
      <div className="img-banner-home-page">
        <img src={imgBannerHomePage} alt="Littoral rocheux"></img>
        <p className="tag">Chez vous, partout et ailleurs</p>
      </div>
      <section className="cards-container">
        {dataHousings.map((dataHousing) => (
          <div key={dataHousing.id}>
            <Card dataHousing={dataHousing} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default HomePage;
