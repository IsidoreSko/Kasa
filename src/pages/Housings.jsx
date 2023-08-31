import React from "react";
import { useParams } from "react-router-dom";
import dataHousings from "../assets/data/housingListings.json";

function Housings() {
  const { id } = useParams();
  // const housing = dataHousings.find((item) => item.id === dataHousings.id);
  console.log(id);
  return (
    <main>
      {/* </Carousel> */}
      <section>
        {dataHousings.map((dataHousing) => (
          <div className="housingDescription">
            <div className="decription-name">
              <div className="names">
                <h1 className="title"></h1>
                <h2 className="subtitle"></h2>
              </div>
              <div className="owner">
                <h3 className="owner-name"></h3>
                <img className="owner-picture" src="" alt="" />
              </div>
            </div>
            <div className="tag-rating">
              <div className="tags"></div>
              <div className="rating"></div>
            </div>
            <div className="collapse-container"></div>
          </div>
        ))}
      </section>
    </main>
  );
  //    : (housing ?
  //     console.log("error")
  //   );
}

export default Housings;
