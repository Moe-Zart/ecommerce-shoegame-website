import React from "react";
import Shoe1 from "../assets/shoe 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Shoe from "./Shoe";
import data from "../data";
const LatestArrivals = () => {
  return (
    <section id="latest-arrivals">
      <div className="container">
        <div className="row">
          <h2>
            Latest <span className="blue-text">Arrivals</span>
          </h2>
          <div className="shoes">
            {data.slice(0, 6).map((shoe) => (
              <Shoe key={shoe.id} shoe={shoe} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestArrivals;
