import React from "react";
import Shoe12 from "../assets/shoe 12.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2>
            Featured <span className="blue-text">Shoes</span>
          </h2>
          <div className="shoes">
            <div className="shoe-wrapper">
              <figure className="shoe-img-wrapper shadow">
                <img className="shoe-img" src={Shoe12} alt="" />
              </figure>
              <div className="shoe-details">
                <div className="shoe-name">
                  Jordan 1 Retro High OG University Blue
                </div>
                <div className="shoe-rating">
                  <FontAwesomeIcon icon="star" className="fas fa-star" />
                  <FontAwesomeIcon icon="star" className="fas fa-star" />
                  <FontAwesomeIcon icon="star" className="fas fa-star" />
                  <FontAwesomeIcon icon="star" className="fas fa-star" />
                  <FontAwesomeIcon icon="star-half-alt" className="fas fa-star-half-alt"/>
                </div>
                <div className="shoe-price">
                  <span className="shoe-price-slash">$599</span> $499
                </div>
              </div>
            </div>
            <div className="shoe-wrapper">
              <figure className="shoe-img-wrapper shadow">
                <img className="shoe-img" src={Shoe12} alt="" />
              </figure>
              <div className="shoe-details">
                <div className="shoe-name">
                  Jordan 1 Retro High OG University Blue
                </div>
                <div className="shoe-rating">
                  <FontAwesomeIcon icon="star" className="fas fa-star" />
                  <FontAwesomeIcon icon="star" className="fas fa-star" />
                  <FontAwesomeIcon icon="star" className="fas fa-star" />
                  <FontAwesomeIcon icon="star" className="fas fa-star" />
                  <FontAwesomeIcon icon="star-half-alt" className="fas fa-star-half-alt"/>
                </div>
                <div className="shoe-price">
                  <span className="shoe-price-slash">$599</span> $499
                </div>
              </div>
            </div>
            <div className="shoe-wrapper">
              <figure className="shoe-img-wrapper shadow">
                <img className="shoe-img" src={Shoe12} alt="" />
              </figure>
              <div className="shoe-details">
                <div className="shoe-name">
                  Jordan 1 Retro High OG University Blue
                </div>
                <div className="shoe-rating">
                  <FontAwesomeIcon icon="star" className="fas fa-star" />
                  <FontAwesomeIcon icon="star" className="fas fa-star" />
                  <FontAwesomeIcon icon="star" className="fas fa-star" />
                  <FontAwesomeIcon icon="star" className="fas fa-star" />
                  <FontAwesomeIcon icon="star-half-alt" className="fas fa-star-half-alt"/>
                </div>
                <div className="shoe-price">
                  <span className="shoe-price-slash">$599</span> $499
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
