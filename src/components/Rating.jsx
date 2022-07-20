import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({rating}) => {
    return (
        <div className="shoe-rating">
          {new Array(Math.floor(rating)).fill(0).map((_, index) => (
            <FontAwesomeIcon icon="star" key={index} className="fas fa-star" />
          ))}
          {!Number.isInteger(rating) ? (
            <FontAwesomeIcon
              icon="star-half-alt"
              className="fas fa-star-half-alt"
            />
          ) : null}
        </div>
    );
}

export default Rating;
