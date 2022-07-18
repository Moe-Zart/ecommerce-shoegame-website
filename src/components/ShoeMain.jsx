import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ShoeMain = () => {
  return (
    <main id="shoes-main">
      <section>
        <div className="container shoe-page-container">
          <div className="row shoe-page-row">
            <a className="back-arrow-anchor" href="/">
              <button className="back-arrow">
                <FontAwesomeIcon
                  icon="arrow-left"
                  className="fas fa-arrow-left"
                />
                <span className="back-text">Back</span>
              </button>
            </a>
            <div className="shoes-header">
              <h2 className="all-shoes">
                All <span className="blue-text">Shoes</span>
              </h2>
              <select
                id="filter"
                /*onchange="filterShoes(event)"*/ defaultValue={"sort"}
              >
                <option className="disabled-option" value="sort" disabled>
                  Sort
                </option>
                <option value="LOW-HIGH">Price, Low to High</option>
                <option value="HIGH-LOW">Price, High to Low</option>
                <option value="RATING">Rating</option>
              </select>
            </div>
            <div className="shoes shoe-page-shoes shoes-loading">
              <div className="shoes-loading-wrapper">
                <FontAwesomeIcon
                  icon="circle"
                  className="fas fa-circle circle-loading circle1"
                />
                <FontAwesomeIcon
                  icon="circle"
                  className="fas fa-circle circle-loading circle2"
                />
                <FontAwesomeIcon
                  icon="circle"
                  className="fas fa-circle circle-loading circle3"
                />
                <FontAwesomeIcon
                  icon="circle"
                  className="fas fa-circle circle-loading circle4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ShoeMain;
