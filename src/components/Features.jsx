import React from "react";
import Shoe from "./Shoe";
const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2>
            Featured <span className="blue-text">Shoes</span>
          </h2>
          <div className="shoes">
            <Shoe />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
