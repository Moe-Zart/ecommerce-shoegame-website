import React from "react";
import HeaderImg from "../assets/man holding discount for shoes.png";
const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-text">
          <h1>Australia's most awarded online shoe store</h1>
          <h2>
            Level up your <span className="blue-text">Shoe game!</span>
          </h2>
          <a href="#features">
            <button className="browse-button">Browse Shoes</button>
          </a>
        </div>
        <figure className="header-img-wrapper">
          <img className="header-img" src={HeaderImg} alt="" />
        </figure>
      </div>
    </header>
  );
};

export default Header;
