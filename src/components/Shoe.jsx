import React from "react";
import Price from "./Price";
import Rating from "./Rating";

const Shoe = (props) => {
  return (
    <div className="shoe-wrapper">
      <a className="shoes-anchor" href={`/shoes/${props.shoe.id}`}>
        <figure className="shoe-img-wrapper shadow">
          <img className="shoe-img" src={props.shoe.url} alt="" />
        </figure>
      </a>
      <div className="shoe-details">
        <a className="shoes-anchor" href={`/shoes/${props.shoe.id}`}>
          <div className="shoe-name">{props.shoe.title}</div>
        </a>
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
