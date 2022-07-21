import React from "react";
import Explore from "../components/Explore";
import Features from "../components/Features";
import Header from "../components/Header";
import Highlights from "../components/Highlights";
import LatestArrivals from "../components/LatestArrivals";

const HomePage = () => {
  return (
    <>
    
      <Header />
      <main>
        <Highlights />
        <Features />
        <LatestArrivals />
        <Explore />
      </main>
    </>
  );
};

export default HomePage;
