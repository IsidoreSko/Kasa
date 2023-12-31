import React from "react";
import litStar from "../assets/images/litStar.png";
import extinctStar from "../assets/images/extinctStar.png";

function Rating({ rating }) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {numbers.map((number) =>
        rating >= number ? (
          <img
            src={litStar}
            alt="Etoile allumée"
            key={number}
            className="star"
          />
        ) : (
          <img
            src={extinctStar}
            alt="Etoile éteinte"
            key={number}
            className="star"
          />
        )
      )}
    </div>
  );
}

export default Rating;
