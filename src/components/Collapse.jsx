import React from "react";
import arrowBack from "../assets/images/arrowBack.png";
import { useState } from "react";

function Collapses({ content, title }) {
  const [show, setShow] = useState(false);

  return (
    <div key={title} className="collapse">
      <div className="not-open not-open-housing">
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
      {/* {show && (
        <div className="collapse-text-container open-collapse">
          <p className="collapse-text ">{content}</p>
        </div>
      )} */}
      {show && (
        <div
          className={
            show === true
              ? "collapse-text-container open-collapse"
              : "collapse-text-container close-collapse"
          }
        >
          <p className="collapse-text ">{content}</p>
        </div>
      )}

      {/* {(!show)(
        <div className="collapse-text-container close-collapse">
          <p className="collapse-text ">{content}</p>
        </div>
      )} */}
    </div>
  );
}
//
export default Collapses;
