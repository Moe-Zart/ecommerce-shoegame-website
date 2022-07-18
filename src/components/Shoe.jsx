import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Shoe = (props) => {
  return (
    <div className="shoe-wrapper">
      <figure className="shoe-img-wrapper shadow">
        <img className="shoe-img" src={props.shoe.url} alt="" />
      </figure>
      <div className="shoe-details">
        <div className="shoe-name">{props.shoe.title}</div>
        <div className="shoe-rating">
          <FontAwesomeIcon icon="star" className="fas fa-star" />
          <FontAwesomeIcon icon="star" className="fas fa-star" />
          <FontAwesomeIcon icon="star" className="fas fa-star" />
          <FontAwesomeIcon icon="star" className="fas fa-star" />
          <FontAwesomeIcon
            icon="star-half-alt"
            className="fas fa-star-half-alt"
          />
        </div>
        <div className="shoe-price">
          <span className="shoe-price-slash">${() =>{
           if(props.shoe.salePrice === null){
            return props.shoe.salePrice
           }
           return props.shoe.originalPrice}}</span> ${props.shoe.originalPrice}
        </div>
      </div>
    </div>
  );
};

export default Shoe;
