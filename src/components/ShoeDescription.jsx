import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgId from "../assets/shoe 1.png";
import Price from "./Price";
import Rating from "./Rating";
import { useParams } from "react-router-dom";
const ShoeDescription = ({ data }) => {
  const { id } = useParams(); //grabs the  id
  const shoe = data.find((shoe) => shoe.id == id);
  return (
    <section>
      <div className="container shoecont">
        <a className="back-arrow-anchor" href="/shoes">
          <button className="back-arrow back-desc">
            <FontAwesomeIcon icon="arrow-left" className="fas fa-arrow-left" />
            <span className="back-text"> Back</span>
          </button>
        </a>
        <div className="shoe-description-container">
          <figure className="shoe-description-img-wrapper">
            <img src={shoe.url} className="shoe-description-img" />
          </figure>
          <div className="shoe-description-info-wrapper">
            <h3 className="info-text">{shoe.title}</h3>
            <Price
              originalPrice={shoe.originalPrice}
              salePrice={shoe.salePrice}
            />
            <Rating rating={shoe.rating} className="shoe-rating" />
            <p className="info-text">{shoe.description}</p>
            <hr />
            <br />
            <p>
              Available Sizes (in Mens): <br />{" "}
              <span className="womans">Womens size is 1.5 sizes up</span>{" "}
            </p>
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
              <a className="add-to-cart-anchor" href="/cart">
                <button className="add-to-cart"> Add To Cart</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoeDescription;
