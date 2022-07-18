import React from "react";
import Shoe from "./Shoe";
import Data from "../data";
const Features = () => {
  console.log(Data);
  function render5Stars() {
    const discShoes = 
    console.log(discShoes);
  }
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2>
            Featured <span className="blue-text">Shoes</span>
          </h2>
          <div className="shoes">
          {Data.filter((shoes) => shoes.salePrice).map (shoe => <Shoe key={shoe.id} shoe={shoe}/>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
