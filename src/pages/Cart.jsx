import React from "react";
import img from "../assets/shoe 1.png";
const Cart = () => {
  return (
    <div className="container cart-container">
      <div className="row">
        <div className="cart-title-wrapper">
          <h2 className="cart-title">Cart</h2>
        </div>
        <div className="cart-subtitles">
          <h4 className="shoe-sub">Shoe</h4>
          <h4 className="quantity-sub">Quantity</h4>
          <h4 className="price-sub">Price</h4>
        </div>
        <div className="cart-contents">
          <div className="cart-order">
            <div className="cart-shoe-info">
              <figure className="shoe-img-wrapper cart-img-wrapper shadow">
                <img className="shoe-img cart-img" src={img} alt="" />
              </figure>
              <div className="cart-shoe-details">
                <div className="shoe-name">Dunk Low</div>
                <div>$149</div>
                <a href="">Remove</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
