import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShoeGameLogo from '../assets/shoegame draft logo.png'
const Nav = () => {
    return (
        <nav>
        <div className="nav-container">
          <img
            className="shoegame-logo"
            src={ShoeGameLogo}
            alt=""
          />
          <ul className="nav-links">
            <li><a href="" className="nav-link">Home</a></li>
            <li><a href="" className="nav-link shoes-link">Shoes</a></li>
            <li><a className="nav-link no-cursor"><FontAwesomeIcon icon="shopping-cart"/></a></li>
          </ul>
          <button className="menu" onclick="openMenu()">
            <FontAwesomeIcon icon="bars" />
          </button>
          <div className="menu-backdrop">
            <button className="menu menu-close" onclick="closeMenu()">
            <FontAwesomeIcon icon="times" />
            </button>
            <ul className="menu-links">
              <li className="menu-list">
                <a className="menu-link" href="" onclick="closeMenu()"
                  >Home </a>
              </li>
              <li className="menu-list">
                <a className="menu-link" href="" onclick="closeMenu()"
                  >Shoes</a>
              </li>
              <li className="menu-list">
                <a className="menu-link no-cursor">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Nav;
