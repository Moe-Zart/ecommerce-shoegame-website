import React from "react";
import img from "../assets/shoe 1.png";
const Cart = ({ cart }) => {
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
        <div className="cart-body">
          {cart.map((shoe) => {
            return (
              <div className="cart-order">
                <div className="cart-shoe-info">
                  <figure className="shoe-img-wrapper cart-img-wrapper shadow">
                    <img className="shoe-img cart-img" src={img} alt="" />
                  </figure>
                  <div className="cart-shoe-details">
                    <div className="shoe-name">Dunk Low</div>
                    <div className="shoe-cart-price">$149</div>
                    <a className="shoe-cart-price" href="">
                      Remove
                    </a>
                  </div>
                </div>
                <div className="quantity-sub cart-quantity">
                  <input
                    type="number"
                    min={0}
                    max={99}
                    className="cart-quantity-input"
                  />
                </div>
                <p className="price-sub cart-price">$149</p>
              </div>
            );
          })}

          <div className="total">
            <div className="total-component">
              <p className="total-sub">Subtotal</p>
              <p className="total-sub">Price-10%*Price</p>
            </div>
            <div className="total-component">
              <p className="total-sub">Tax</p>
              <p className="total-sub">10%*Price</p>
            </div>
            <div className="total-component">
              <p className="total-sub total-final">Total</p>
              <p className="total-sub total-final"> Price</p>
            </div>
            <button
              className="add-to-cart checkout-button no-cursor"
              onClick={() => alert(`Not functional at the moment  :(`)}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
