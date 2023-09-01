import React from "react";
import { useParams } from "react-router-dom";
import dataHousings from "../assets/data/housingListings.json";

import Tags from "../components/Tags";
import Rating from "../components/Rating";
import Collapses from "../components/Collapse";

function Housings() {
  const housingId = useParams();
  const housing = dataHousings.find((item) => item.id === housingId.id);

  if (housing) {
    // }
    return (
      <main>
        {/* </Carousel> */}
        <section>
          <div className="housingDescription">
            <div className="decription-name">
              <div className="names">
                <h1 className="title-names">{housing.title}</h1>
                <h2 className="subtitle-names">{housing.location}</h2>
              </div>
              <div className="owner">
                <h3 className="owner-name">{housing.host.name}</h3>
                <img
                  className="owner-picture"
                  src={housing.host.picture}
                  alt={housing.host.name}
                />
              </div>
            </div>
            <div className="tags-rating">
              <div className="tags-container">
                <Tags tag={housing.tags} className="tag" />
              </div>
              <div className="rating">
                <Rating rating={housing.rating} />
              </div>
            </div>
            <div className="collapse-housing collapse">
              <Collapses
                title="Description"
                content={housing.description}
                className="collapse-housing-single"
              />

              <Collapses
                title="Équipements"
                content={housing.equipments.map((equipment, id) => (
                  <li key={id}>{equipment}</li>
                ))}
                className="collapse-housing-single"
              />
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Housings;
