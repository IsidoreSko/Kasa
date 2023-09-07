import React from "react";
import imgBannerHomePage from "../assets/images/imgBannerHomePage.png";
import dataHousings from "../assets/data/housingListings.json";
import Card from "../components/Card";
import Banner from "../components/Banner";

function HomePage() {
  return (
    <div>
      <Banner
        picture={imgBannerHomePage}
        title="Chez vous, partout et ailleurs"
        className="banner"
      />
      <section className="cards-container">
        {dataHousings.map((dataHousing) => (
          <Card dataHousing={dataHousing} key={dataHousing.id} />
        ))}
      </section>
    </div>
  );
}

export default HomePage;
