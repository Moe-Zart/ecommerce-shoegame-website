import React from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Rating from "./Rating";

const Shoe = (props) => {
  return (
    <div className="shoe-wrapper">
      <Link className="shoes-anchor" to={`/shoes/${props.shoe.id}`}>
        <figure className="shoe-img-wrapper shadow">
          <img className="shoe-img" src={props.shoe.url} alt="" />
        </figure>
      </Link>
      <div className="shoe-details">
        <Link className="shoes-anchor" to={`/shoes/${props.shoe.id}`}>
          <div className="shoe-name">{props.shoe.title}</div>
        </Link>
        <Rating rating={props.shoe.rating} />
        <Price
          salePrice={props.shoe.salePrice}
          originalPrice={props.shoe.originalPrice}
        />
      </div>
    </div>
  );
};

export default Shoe;
