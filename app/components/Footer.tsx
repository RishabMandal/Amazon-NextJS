"use client"

import React from "react";
// import { NavLink } from "react-router-dom";
import VoiceAssistant from "./VoiceAssistant";

// import "../footer/footr.css";

const Footer = () => {
  const year = new Date().getFullYear();
  // console.log(year);

  return (
    <footer className="">
      {/* // Voice Assistant  */}
      {/* <div>
        <VoiceAssistant />
      </div> */}
      {/* // */}
      <div
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="text-white bg-gray-700 hover:bg-gray-600 py-2 text-sm cursor-pointer"
      >
        Back to top
      </div>
      <div className="footer_container xs:flex-wrap space-x-4 xs:space-x-0 text-left py-10 px-20 bg-[#232F3E] text-white flex justify-evenly">
        <div className="footr_details_one xs:min-w-[100px] max-w-[160px]">
          <h3 className="font-bold">Get to Know Us</h3>
          <p className="text-sm cursor-pointer text-left my-1">About us</p>
          <p className="text-sm cursor-pointer text-left my-1">Careers</p>
          <p className="text-sm cursor-pointer text-left my-1">
            Press Releases
          </p>
          <p className="text-sm cursor-pointer text-left my-1">Amazon Cares</p>
        </div>
        <div className="footr_details_one xs:min-w-[100px] max-w-[160px]">
          <h3 className="font-bold">Connect with Us</h3>
          <p className="text-sm cursor-pointer text-left my-1">Facebook</p>
          <p className="text-sm cursor-pointer text-left my-1">Twitter</p>
          <p className="text-sm cursor-pointer text-left my-1">Instagram</p>
        </div>
        <div className="footr_details_one xs:min-w-[100px] max-w-[160px]">
          <h3 className="font-bold">Make Money with Us</h3>
          <p className="text-sm cursor-pointer text-left my-1">Facebook</p>
          <p className="text-sm cursor-pointer text-left my-1">Twitter</p>
          <p className="text-sm cursor-pointer text-left my-1">Instagram</p>
        </div>
        <div className="footr_details_one xs:min-w-[100px] max-w-[160px]">
          <h3 className="font-bold">Let Us Help You</h3>
          <p className="text-sm cursor-pointer text-left my-1">Facebook</p>
          <p className="text-sm cursor-pointer text-left my-1">Twitter</p>
          <p className="text-sm cursor-pointer text-left my-1">Instagram</p>
        </div>
      </div>
      <hr />
      <div className="bg-[#232F3E] py-10 flex justify-evenly items-center">
        {/* <NavLink to="/">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
            className="w-20 object-contain cursor-pointer"
          />
        </NavLink> */}
        <div className="text-gray-300 flex border-2 border--gray-300 py-2 px-4 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 my-auto mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          English
        </div>
      </div>
      <div className="lastdetails bg-[#131A22] text-white p-8">
        <p className="text-xs">
          Conditions of Use & Sale &nbsp; &nbsp;&nbsp; Privacy Notice &nbsp;
          &nbsp;&nbsp; Interest-Based Ads &nbsp; &nbsp;&nbsp;
        </p>
        <p className="text-xs">
          © 1996-{year}, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
};

export default Footer;
