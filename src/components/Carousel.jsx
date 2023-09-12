import React from "react";
import { useState } from "react";
import arrowRight from "../assets/images/arrow-forward.png";
import arrowLeft from "../assets/images/arrow-back.png";

function Carousel({ slides, slidesId }) {
  const length = slides.length;
  const [slideVu, setSlideVu] = useState(0);

  const previousSlide = () => {
    const index = slideVu > 0 ? slideVu - 1 : length - 1;
    setSlideVu(index);
  };

  const nextSlide = () => {
    const index = slideVu < length - 1 ? slideVu + 1 : 0;
    setSlideVu(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel-picture ">
          {slides.map((index) => (
            <img
              key={index}
              src={slides[slideVu]}
              alt={slidesId}
              className="pictureAppears"
            ></img>
          ))}
        </div>
        {length > 1 && (
          <div>
            <img
              src={arrowRight}
              alt="Suivante"
              className="arrowRight "
              onClick={nextSlide}
            />
            <img
              src={arrowLeft}
              alt="Précédente"
              className="arrowLeft"
              onClick={previousSlide}
            />
            <div className="counter">
              {slideVu + 1}/{length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carousel;
