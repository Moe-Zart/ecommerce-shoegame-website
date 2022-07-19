import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgId from "../assets/shoe 1.png";
const ShoeDescription = () => {
  return (
    <main id="shoes-main">
      <section>
        <div className="container shoecont">
          <a className="back-arrow-anchor" href="/">
            <button className="back-arrow back-desc">
              <FontAwesomeIcon
                icon="arrow-left"
                className="fas fa-arrow-left"
              />
              <span className="back-text"> Back</span>
            </button>
          </a>
          <div className="shoe-description-container">
            <figure className="shoe-description-img-wrapper">
              <img src={imgId} className="shoe-description-img" />
            </figure>
            <div className="shoe-description-info-wrapper">
              <h3 className="info-text">shoe.id</h3>
              <h2 className="info-text">$shoe.salePrice</h2>
              <p className="info-text">$shoe.description</p>
              <hr />
              <p>Available Sizes (in Mens): <br /> <span className="womans">Womens size is 1.5 sizes up</span>   </p>
              <div className="sizes">
                <button className="sizes-button">5 (Womens 6.5)</button>
                <button className="sizes-button">5.5 (Womens 7)</button>
                <button className="sizes-button">6 (Womens 7.5)</button>
                <button className="sizes-button">6.5 (Womens 8)</button>
                <button className="sizes-button">7 (Womens 8.5)</button>
                <button className="sizes-button">7.5 (Womens 9)</button>
                <button className="sizes-button">8 (Womens 9.5)</button>
                <button className="sizes-button">8.5 (Womens 10)</button>
                <button className="sizes-button">9 (Womens 10.5)</button>
                <button className="sizes-button">9.5 (Womens 11)</button>
                <button className="sizes-button">10 (Womens 11.5)</button>
                <button className="sizes-button">10.5 (Womens 12)</button>
                <button className="sizes-button">11 (Womens 12.5)</button>
                <button className="sizes-button">11.5 (Womens 13)</button>
              </div>
              <div className="add-button-wrapper">

              <button className="add-to-cart">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ShoeDescription;
