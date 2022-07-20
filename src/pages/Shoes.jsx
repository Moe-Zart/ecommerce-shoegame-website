import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Shoe from "../components/Shoe";
import { Link } from "react-router-dom";

const Shoes = ({ data: initialData }) => {
  const [data, setData] = useState(initialData);
  function filterShoes(event) {
    console.log(event.target.value);
    if (event.target.value == "LOW-HIGH") {
      setData(
        data
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    } else if (event.target.value == "HIGH-LOW") {
      setData(
        data
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      );
    } else if (event.target.value == "RATING") {
      setData(data.slice().sort((a, b) => b.rating - a.rating));
    }
  }

  return (
    <main id="shoes-main">
      <section>
        <div className="container shoe-page-container">
          <div className="row shoe-page-row">
            <Link className="back-arrow-anchor" to="/">
              <button className="back-arrow">
                <FontAwesomeIcon
                  icon="arrow-left"
                  className="fas fa-arrow-left"
                />
                <span className="back-text"> Back</span>
              </button>
            </Link>
            <div className="shoes-header">
              <h2 className="all-shoes">
                All <span className="blue-text">Shoes</span>
              </h2>
              <select id="filter" onChange={filterShoes} defaultValue={"sort"}>
                <option className="disabled-option" value="sort" disabled>
                  Sort
                </option>
                <option value="LOW-HIGH">Price, Low to High</option>
                <option value="HIGH-LOW">Price, High to Low</option>
                <option value="RATING">Rating</option>
              </select>
            </div>
            <div className="shoes shoe-page-shoes">
              {data.map((shoe) => (
                <Shoe key={shoe.id} shoe={shoe} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shoes;
