"use client";

import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
// import { NavLink } from "react-router-dom";
// import { cartContext, cartPriceContext } from "../../App";
import Slide from "@/app/components/MainContentComponents/Slide";
import Link from "next/link";

export const ViewProductInDetail = ({
  wishlistItems,
  setwishlistItems,
  params,
}) => {
  //   const { id } = useParams();
  const id = params.id;
//   alert(params.id);

  const [productJSON, setproductJSON] = useState<any>();
  const [productitem, setproductitem] = useState<any>();

  //   const { cartItems, setcartItems } = useContext(cartContext);
  //   const { cartPrice, setcartPrice } = useContext(cartPriceContext);

  useEffect(() => {
    axios
      .get(`https://makeup-api.herokuapp.com/api/v1/products.json`)
      .then((response) => {
        setproductJSON(response.data);
      });
  }, []);

  useEffect(() => {
    setproductitem(
      productJSON && productJSON.filter((product:any) => product.id == id)
    );
  }, [productJSON, id]);

  useEffect(() => {
    // console.log(productitem);
    // console.log(productitem && productitem[0].name);
  }, [productitem]);

  //   useEffect(() => {
  //     // console.log(productitem);
  //     console.log(id);
  //     console.log(productitem && productitem[0].name);
  //   }, [id]);

  return (
    <div>
      <div>
        <section className="text-gray-600 body-font overflow-hidden">
          {!productitem && (
            <div className="text-black h-screen flex">
              <div className="font-bold text-4xl my-auto mx-auto">
                Loading...
              </div>
            </div>
          )}
          {productitem && (
            <div className="container  mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap items-start">
                <img
                  alt="ecommerce"
                  className="lg:w-1/2 duration-200 hover:scale-150 hover:border hover:p-2 hover:z-10 bg-white w-full cursor-pointer mt-10 h-auto object-contain rounded"
                    src={productitem[0].image_link}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h1 className="text-gray-900 text-xl text-left font-medium mb-1">
                    {productitem[0].name}
                  </h1>
                  <div className="flex">
                    <span className="flex items-center">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 text-amber-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 text-amber-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 text-amber-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 text-amber-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 text-amber-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <span className="text-gray-600 ml-3">
                        {/* {Math.floor(productitem[0].price * 9)} Reviews */}
                      </span>
                    </span>
                  </div>
                  <div className="text-left">
                    <div>{productitem[0].category}</div>
                    <div className="text-red-600 font-bold">
                      Deal of the Day
                    </div>
                    <div className="flex">
                      <div>₹</div>
                      <div className="text-2xl font-semibold text-black">
                        {Math.ceil(productitem[0].price * 80)}
                      </div>
                      <div className="text-sm mt-1 text-gray-900 mx-2">
                        (₹{Math.ceil(productitem[0].price * 80)} / count)
                      </div>
                    </div>
                    <div className="text-md line-through">
                      M.R.P: ₹{Math.ceil(productitem[0].price * 135)}
                    </div>
                    <div className="text-xs text-black">
                      Inclusive of all taxes
                    </div>
                  </div>
                  <div className="text-left mt-2">
                    <div className="text-blue-600 text-md">FREE delivery</div>
                    <div className=" text-md">
                      if you spend ₹499 or above on items shipped by Amazon
                    </div>
                    <div className=" text-md">
                      Or fastest delivery Tomorrow. Order within 2 hrs 40 mins.
                      Details
                    </div>
                    <div className="text-green-700 text-xl my-2 font-semibold">
                      In stock.
                    </div>
                    <div className=" text-md">
                      Sold by {productitem[0].brand} and Fulfilled by Amazon
                    </div>
                  </div>
                  <div className="flex mt-2 items-center pb-5">
                    <div className="flex">
                      <span className="mr-3">Color</span>
                      <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                      <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                      <button className="border-2 border-gray-300 ml-1 bg-amber-500 rounded-full w-6 h-6 focus:outline-none"></button>
                    </div>
                    <div className="flex ml-6 items-center">
                      <span className="mr-3">Quantity</span>
                      <div className="relative">
                        <select className="rounded border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-500 text-base pl-3 pr-10">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex text-black space-x-5 mb-2">
                    <button
                      //   onClick={() => {
                      //     setcartItems([
                      //       ...cartItems,
                      //       {
                      //         name: productitem[0].name,
                      //         id: productitem[0].id,
                      //         quantity: "",
                      //         price: Math.ceil(productitem[0].price * 80),
                      //         image_link: productitem[0].image_link,
                      //       },
                      //     ]);
                      //     setcartPrice(
                      //       (prev) => prev + Math.ceil(productitem[0].price * 80)
                      //     );
                      //   }}
                      className="bg-yellow-400 hover:bg-yellow-500 py-2 px-10 rounded-full"
                    >
                      Add to Cart
                    </button>
                    <Link
                      href="/getcart"
                      //   onClick={() => {
                      //     setcartItems([
                      //       ...cartItems,
                      //       {
                      //         name: productitem[0].name,
                      //         id: productitem[0].id,
                      //         quantity: "",
                      //         price: Math.ceil(productitem[0].price * 80),
                      //         image_link: productitem[0].image_link,
                      //       },
                      //     ]);
                      //     setcartPrice(
                      //       (prev) => prev + Math.ceil(productitem[0].price * 80)
                      //     );
                      //   }}
                    >
                      <button className="bg-amber-500 hover:bg-amber-600 py-2 px-10 rounded-full">
                        Buy Now
                      </button>
                    </Link>
                  </div>
                  <hr />
                  <div
                    // onClick={() => {
                    //   setwishlistItems([
                    //     ...wishlistItems,
                    //     {
                    //       name: productitem[0].name,
                    //       id: productitem[0].id,
                    //       quantity: "",
                    //       price: Math.ceil(productitem[0].price * 80),
                    //       image_link: productitem[0].image_link,
                    //     },
                    //   ]);
                    //   console.log(cartItems);
                    //   console.log(wishlistItems);
                    // }}
                    className="hover:text-red-500 hover:underline cursor-pointer my-1"
                  >
                    Add to Wish List
                  </div>
                  <hr />
                  <div className="text-left mt-4 text-black">
                    <div className="font-bold">About this item</div>
                    <div className="text-md">{productitem[0].description}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
      <div>
        <hr />
        <hr />
        <Slide title="Featured items you may like" productType="lipstick" />
        <hr />
        <hr />
        <Slide
          title="Customers who viewed this item also viewed"
          productType="mascara"
        />
      </div>
    </div>
  );
};

export default ViewProductInDetail;
