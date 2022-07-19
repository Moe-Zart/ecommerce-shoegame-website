import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgId from '../assets/shoe 1.png'
const ShoeDescription = () => {
    return (
   <main id="shoes-main">
      <section>
        <div className="container shoe-page-container">
          <div className="row shoe-page-row">
            <a className="back-arrow-anchor" href="/">
              <button className="back-arrow">
                <FontAwesomeIcon
                  icon="arrow-left"
                  className="fas fa-arrow-left"
                />
                <span className="back-text"> Back</span>
              </button>
            </a>
            
            <div className="shoes-header">
              <h3>
                shoe.id
              </h3>
             <h2>$shoe.salePrice</h2>
            </div>
            <div className="shoes shoe-page-shoes">
            </div>
          </div>
        </div>
      </section>
    </main>
    );
}

export default ShoeDescription;
