import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Shoe = (props) => {
  const sPrice = props.shoe.salePrice;
  const oPrice = props.shoe.originalPrice;
  const rating = props.shoe.rating;
  return (
    <div className="shoe-wrapper">
      <figure className="shoe-img-wrapper shadow">
        <img className="shoe-img" src={props.shoe.url} alt="" />
      </figure>
      <div className="shoe-details">
        <div className="shoe-name">{props.shoe.title}</div>
        <div className="shoe-rating">
          {new Array(Math.floor(rating)).fill(0).map((_, index) => (
            <FontAwesomeIcon icon="star" key={index} className="fas fa-star" />
          ))}
          {!Number.isInteger(rating) ? (
            <FontAwesomeIcon
              icon="star-half-alt"
              className="fas fa-star-half-alt"
            />
          ) : null}
        </div>
        <div className="shoe-price">
          {sPrice ? (
            <>
              <span className="shoe-price-slash">${oPrice}</span> ${sPrice}
            </>
          ) : (
            <>${oPrice}</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shoe;
