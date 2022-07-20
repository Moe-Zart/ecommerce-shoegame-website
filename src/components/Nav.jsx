import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShoeGameLogo from "../assets/shoegame draft logo.png";
const Nav = () => {
  function openMenu() {
    document.body.classList += " menu-open";
  }
  function closeMenu() {
    document.body.classList.remove("menu-open");
  }
  return (
    <nav>
      <div className="nav-container">
        <img className="shoegame-logo" src={ShoeGameLogo} alt="" />
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href='/shoes' className="nav-link shoes-link">
              Shoes
            </a>
          </li>
          <li>
            <a className="nav-link" href="/cart">
              <FontAwesomeIcon icon="shopping-cart" />
            </a>
          </li>
        </ul>
        <button className="menu" onClick={openMenu}>
          <FontAwesomeIcon icon="bars" />
        </button>
        <div className="menu-backdrop">
          <button className="menu menu-close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu-links">
            <li className="menu-list">
              <a className="menu-link" href="" onClick={closeMenu}>
                Home{" "}
              </a>
            </li>
            <li className="menu-list">
              <a className="menu-link" href='' onClick={closeMenu}>
                Shoes
              </a>
            </li>
            <li className="menu-list">
              <a className="menu-link no-cursor">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
