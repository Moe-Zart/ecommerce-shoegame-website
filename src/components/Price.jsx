import React from "react";

const Price = ({salePrice, originalPrice}) => {
  return (
    <div className="shoe-price">
      {salePrice ? (
        <>
          <span className="shoe-price-slash">${originalPrice}</span> ${salePrice}
        </>
      ) : (
        <>${originalPrice}</>
      )}
    </div>
  );
};

export default Price;
