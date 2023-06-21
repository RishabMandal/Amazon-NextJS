import React from "react";
import Caraousel from "./MainContentComponents/Caraousel";
import Slides from "./MainContentComponents/Slides";

const LandingPage = () => {
  return (
    <div className="bg-[#EAEDED]">
      <Caraousel />
      <Slides />
    </div>
  );
};

export default LandingPage;
