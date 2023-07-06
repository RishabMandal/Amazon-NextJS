"use client"

import React from "react";
import Slide from "./Slide";
import { Divider } from "@mui/material";
// import { getProducts } from "../redux/actions/action";
// import { useSelector, useDispatch } from "react-redux";
import { products } from "./productData";
import Link from "next/link";
// import { NavLink } from "react-router-dom";


const Slides = () => {
  return (
    <>
      <div className="home_section pr-4">
        <Slide
          title="Deal Of The Day"
          products={products}
          productType="foundation"
        />
        <div className="slide_part flex items-center bg-white mx-4 mt-3">
          {/* <div className="left_slide w-[80%] ">
            <Slide
              title="Deal Of The Day"
              products={products}
              productType="foundation"
            />
          </div>
          <div className="right_slide w-[20%] ">
            <h4>Festive latest launches</h4>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg"
              alt="rightimg"
            />
            <a href="#">see more</a>
          </div> */}
        </div>

        <Slide
          title="Today's Deals"
          products={products}
          productType="lipstick"
        />

        <Link href="/components/products/ViewProducts">
          <div className="center_img flex flex-wrap px-4 justify-evenly mx-auto my-[13px] ">
            <div className="flex space-x-4 bg-gray-50 p-4 cursor-pointer lg:flex-1">
              <img
                src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/1ce5ec29-9a3c-42d3-bda2-dee2b98956ba._CR0,0,675,675_AC_SX130_SY60_QL70_.jpg"
                alt=""
                className="w-16 object-contain border-r pr-4"
              />
              <div className="my-auto">
                <div className="hover:text-red-600 text-xl font-semibold">
                  Up your game with Maybelline New York
                </div>
                <div className="flex hover:text-red-600">
                  Shop Maybelline New York
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <img
              src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/81935a8f-3380-4f54-9496-466e94417dde._CR0,0,1200,628_SX405_QL70_.jpg"
              alt=""
              className="mx-auto"
            />
          </div>
        </Link>

        <Slide title="Best Seller" products={products} productType="eyeliner" />
        <Slide title="Upto 80% off" products={products} productType="mascara" />
      </div>

      <Divider />
    </>
  );
};

export default Slides;
