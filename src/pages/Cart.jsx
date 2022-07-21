import React, { useState } from "react";
import Price from "../components/Price";
import empty from '../assets/empty.svg'
import { Link } from "react-router-dom";
const Cart = ({ cart, changeQuantity, removeItem }) => {
    const total =() =>{

        let counter = 0;
        cart.forEach((item) => {
            counter += +((item.salePrice || item.originalPrice) * item.quantity);
        });
        return counter;
    }

  return (
    <div className="container cart-container">
      <div className="row cart-row">
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
                <div className="cart-shoe-info shoe-sub">
                  <figure className="shoe-img-wrapper cart-img-wrapper shadow">
                    <img className="shoe-img cart-img" src={shoe.url} alt="" />
                  </figure>
                  <div className="cart-shoe-details">
                    <div className="shoe-name">{shoe.title}</div>
                    <div className="shoe-cart-price">
                      <Price
                        salePrice={shoe.salePrice}
                        originalPrice={shoe.originalPrice}
                      />
                    </div>
                    <button className="shoe-cart-price shoe-cart-price-button" onClick={()=>removeItem(shoe)}>
                      Remove
                    </button>
                  </div>
                </div>
                <div className="quantity-sub cart-quantity">
                  <input
                    type="number"
                    value={shoe.quantity}
                    min={0}
                    max={99}
                    className="cart-quantity-input"
                    onChange={(event) =>
                      changeQuantity(shoe, event.target.value)
                    }
                  />
                </div>
                <p className="price-sub cart-price">
                  ${(shoe.salePrice || shoe.originalPrice) * shoe.quantity}
                </p>
              </div>
            );
          })}

         {cart.length > 0 && <div className="total">
            <div className="total-component">
              <p className="total-sub">Subtotal</p>
              <p className="total-sub">${(total() * 0.9).toFixed(2)}</p>
            </div>
            <div className="total-component">
              <p className="total-sub">Tax</p>
              <p className="total-sub">${(total()*0.1).toFixed(2)}</p>
            </div>
            <div className="total-component">
              <p className="total-sub total-final">Total</p>
              <p className="total-sub total-final"> ${(total()).toFixed(2)}</p>
            </div>
            <button
              className="add-to-cart checkout-button no-cursor"
              onClick={() => alert(`Not functional at the moment  :(`)}
            >
              Checkout
            </button>
          </div>}
        </div>
        {
            cart.length ===0 && (
                <div className="cart-empty">
            <img src={empty} alt="" className="cart-empty-img" />
            <h2 className="empty-heading">Whoops! You do not have any shoes in your cart!</h2>
            <Link to="/shoes">
            <button className="browse-button">Browse Shoes</button>
          </Link>
        </div>
            )
        }
        
      </div>
    </div>
  );
};

export default Cart;
