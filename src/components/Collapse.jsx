import React from "react";
import arrowBack from "../assets/images/arrowBack.png";
import { useState } from "react";

function Collapses({ content, title }) {
  const [show, setShow] = useState(false);

  return (
    <div key={title}>
      <div className="not-open ">
        <h2 className="collapse-title">{title}</h2>
        <div onClick={() => setShow(!show)}>
          <img
            src={arrowBack}
            alt="Icone flèche vers le haut"
            className={
              show ? "collapse-arrow arrow-down" : "collapse-arrow arrow-up "
            }
          />
        </div>
      </div>

      {show && (
        <div className="collapse-text-container">
          <p className="collapse-text ">{content}</p>{" "}
        </div>
      )}
    </div>
  );
}

export default Collapses;
