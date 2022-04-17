import React from "react";
import Banner from "./Banner/Banner";
import MemberShip from "./MemberShip/MemberShip";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <MemberShip />
    </div>
  );
};

export default Home;
