import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Shoe = () => {
  return (
    <div className="shoe-wrapper">
      <figure className="shoe-img-wrapper shadow">
        <img className="shoe-img" src="" alt="" />
      </figure>
      <div className="shoe-details">
        <div className="shoe-name">Jordan 1 Retro High OG University Blue</div>
        <div className="shoe-rating">
          <FontAwesomeIcon icon="star" className="fas fa-star" />
          <FontAwesomeIcon icon="star" className="fas fa-star" />
          <FontAwesomeIcon icon="star" className="fas fa-star" />
          <FontAwesomeIcon icon="star" className="fas fa-star" />
          <FontAwesomeIcon
            icon="star-half-alt"
            className="fas fa-star-half-alt"
          />
        </div>
        <div className="shoe-price">
          <span className="shoe-price-slash">$599</span> $499
        </div>
      </div>
    </div>
  );
};

export default Shoe;
