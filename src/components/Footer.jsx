import React from 'react';
import Logo from '../assets/shoegame draft logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    return (
        <footer>
      <div className="container">
        <div className="row">
          <a className="logo-link" href="#">
            <figure className="shoegame-logo logo-footer">
              <img src={Logo} alt="" />
            </figure>
            <p className="arrow-up"><FontAwesomeIcon icon="arrow-up" className="fas fa-arrow-up" /> Top</p>
          </a>
          <ul className="footer-links">
            <li><a className="footer-link underline" href="#">Home</a></li>
            <li><a className="footer-link no-cursor">About</a></li>
            <li><a className="footer-link underline" href="#features">Shoes</a></li>
            <li><a className="footer-link no-cursor">Contact</a></li>
          </ul>
          <p className="copyright">Copyright © 2022 Shoegame</p>
        </div>
      </div>
    </footer>
    );
}

export default Footer;
