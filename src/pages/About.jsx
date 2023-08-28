import React from "react";
import imgBannerAbout from "../assets/imgBannerAbout.png"
import Collapses from "../components/Collapse";


function About () {

    const aboutDatas = [
        {
          title: "Fiabilité",
          content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
        },
        {
          title: "Respect",
          content: "La bienveillance fait partie des valeurs fondratices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        },
        {
          title: "Service",
          content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.",
        },
        {
          title: "Sécurité",
          content: "La sécurité est la priorité de Kasa. Aussi bien nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        },
      ];


    return (  
      <div>      
            <div className="img-banner-about">
            <img src={imgBannerAbout} alt="Vallée entourée de montagnes" ></img>
        </div>
        <section className="collapse">
          {aboutDatas.map((aboutData) => (
          <Collapses key={aboutData.title} title={aboutData.title} content={aboutData.content}/>
          ))}
        </section>
    </div>
)}

export default About

