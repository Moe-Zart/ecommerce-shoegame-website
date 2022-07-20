import React from "react";
import Shoe from "./Shoe";
import data from "../data";
const RecommendedShoes = () => {
  return (
    <section>
      <div className="container shoecont">
        <h2 className="recommended-title">
          Recommended <span className="blue-text">Shoes</span>
        </h2>
        <div className="recommended-row">
          <div className="shoes recommended-shoes">
            {data.slice(0, 3).map((shoe) => (
              <Shoe key={shoe.id} shoe={shoe} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedShoes;
