import React from "react";
import ShoeDescription from "../components/ShoeDescription";
import RecommendedShoes from "../components/RecommendedShoes";
import data from "../data";
const ShoeInfo = () => {
  return (
    <main id="shoes-main">
      <ShoeDescription data={data} />
      <RecommendedShoes />
    </main>
  );
};

export default ShoeInfo;
