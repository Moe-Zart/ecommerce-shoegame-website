import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="highlights-title">
            Why we are the best in the
            <span className="blue-text"> Shoe Game</span>
          </h2>
          <div className="highlights-wrapper">
            <div className="highlight">
              <div className="highlight-icon">
                <FontAwesomeIcon
                  icon="truck-moving"
                  className="icon no-cursor fas fa-shipping-fast"
                />
              </div>
              <h3>Easy and Quick</h3>
              <p className="highlight-p">
                We offer the fastest delivery services throughout all of
                Australia, so you can step in the shoe game as quickly as
                possible.
              </p>
            </div>
            <div className="highlight">
              <div className="highlight-icon">
                <FontAwesomeIcon
                  icon="tags"
                  className="icon no-cursor fas fa-tags"
                />
              </div>
              <h3>Discounted prices</h3>
              <p className="highlight-p">
                We only offer shoes at their lowest prices, so you dont have to
                spend way over budget to wear your favourite shoes.
              </p>
            </div>
            <div className="highlight">
              <div className="highlight-icon">
                <FontAwesomeIcon
                  icon="check-double"
                  className="icon no-cursor fas fa-check-double"
                />
              </div>
              <h3>Verified Authenticity</h3>
              <p className="highlight-p">
                All shoes are authentic and have been verified by experts in the
                field, to ensure that you receive the shoe you anticipate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
