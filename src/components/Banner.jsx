import React from "react";

function Banner({ title, picture, className }) {
  return (
    <div>
      <div className={className}>
        <img src={picture} alt="" />
        <p className="tag">{title}</p>
      </div>
    </div>
  );
}

export default Banner;
