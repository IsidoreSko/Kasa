import React from "react";
import { useParams } from "react-router-dom";
import dataHousings from "../assets/data/housingListings.json";

function Housings() {
  const { id } = useParams();
  const housing = dataHousings.find((item) => item.id === dataHousings.id);
  console.log(id);
  return housing ? (
    <section>
      <h2>zut</h2>
    </section>
  ) : (
    console.log("error")
  );
}

export default Housings;
