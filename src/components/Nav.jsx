import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShoeGameLogo from "../assets/shoegame draft logo.png";
import { Link } from 'react-router-dom'

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
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to='/shoes' className="nav-link shoes-link">
              Shoes
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link" >
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>
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
              <Link to="" className="menu-link" onClick={closeMenu}>
                Home{" "}
              </Link>
            </li>
            <li className="menu-list">
              <Link to='' className="menu-link" onClick={closeMenu}>
                Shoes
              </Link>
            </li>
            <li className="menu-list">
              <Link to="" className="menu-link no-cursor">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
