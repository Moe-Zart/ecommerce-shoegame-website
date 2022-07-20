import React from "react";
import Shoe from "./Shoe";
import data from "../data";
import { useParams } from "react-router-dom";
const RecommendedShoes = () => {
    const { id } = useParams(); //grabs the  id
    const shoe = data.find((shoe) => shoe.id == id);
  return (
    <section>
      <div className="container shoecont">
        <h2 className="recommended-title">
          Recommended <span className="blue-text">Shoes</span>
        </h2>
        <div className="recommended-row">
          <div className="shoes recommended-shoes">
            {data.filter((shoe)=>shoe.rating >=4 && +shoe.id!== +id).slice(0,3).map((shoe) => (
              <Shoe key={shoe.id} shoe={shoe} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedShoes;
