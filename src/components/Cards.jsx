// import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import dataHousings from "../housingListings.json";


function Cards(){
    return(
        <section className="cards-container">
            {dataHousings.map((dataHousing) => {
                return(
                    <div key={dataHousing.id} className="card">
                        <Link to={`/lodging/${dataHousing.id}`} className="link">
                            <div className="cards-content">
                                <img src={dataHousing.cover} alt="" className="cards-cover" />
                                <h2 className="cards-title">{dataHousing.title}</h2>
                            </div>
                        </Link>
                    </div>
                )
                })}
        </section>
    )
}

export default Cards;