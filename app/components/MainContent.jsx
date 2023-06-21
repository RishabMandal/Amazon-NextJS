"use client"

import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   NavLink,
// } from "react-router-dom";
import Caraousel from "./MainContentComponents/Caraousel";
import Slides from "./MainContentComponents/Slides";

export const MainContent = () => {
  return (
    // <Router>
    <div className="bg-[#EAEDED]">
      <Caraousel />
      <Slides />
    </div>
    // {/* </Router> */}
  );
};
