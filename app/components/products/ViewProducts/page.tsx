"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
// import { NavLink } from "react-router-dom";

export const ViewProducts = () => {
  const [productJSON, setproductJSON] = useState<any>();
  const [brand, setbrand] = useState("maybelline");
  const [productType, setproductType] = useState("eyeshadow");

  useEffect(() => {
    axios
      .get(
        `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=${productType}`
      )
      .then((response) => {
        setproductJSON(response.data);
      });
  }, [brand, productType]);

  return (
    <div>
      <div className="flex text-sm m-2">
        <div>results for</div>
        <div className="text-red-700 ml-1 font-bold">
          "{brand} {productType}"
        </div>
      </div>
      <hr />
      <hr />
      <div className="flex">
        {/* Left side  */}
        <div className="w-1/6 px-2 mt-1 mb-4">
          <div className="text-left text-xs font-bold mt-2 mb-1">
            Delivery Day
          </div>
          {/* Brand  */}
          <div>
            <div className="text-left text-xs font-bold mt-2 mb-1">Brand</div>
            <button
              className="block text-xs hover:text-red-700"
              onClick={() => {
                setbrand("maybelline");
              }}
            >
              maybelline
            </button>
            <button
              className="block text-xs hover:text-red-700"
              onClick={() => {
                setbrand("covergirl");
              }}
            >
              covergirl
            </button>
            <button
              className="block text-xs hover:text-red-700"
              onClick={() => {
                setbrand("revlon");
              }}
            >
              revlon
            </button>
            <button
              className="block text-xs hover:text-red-700"
              onClick={() => {
                setbrand("annabelle");
              }}
            >
              annabelle
            </button>
            <button
              className="block text-xs text-left hover:text-red-700"
              onClick={() => {
                setbrand("salon-perfect");
              }}
            >
              salon perfect
            </button>
            <button
              className="block text-xs hover:text-red-700"
              onClick={() => {
                setbrand("clinique");
              }}
            >
              clinique
            </button>
            <button
              className="block text-xs hover:text-red-700"
              onClick={() => {
                setbrand("l'oreal");
              }}
            >
              l'oreal
            </button>
          </div>
          {/* Type  */}
          <div>
            <div className="text-left text-xs font-bold mt-2 mb-1">Type</div>
            <button
              className="block text-xs hover:text-red-700"
              onClick={() => {
                setproductType("lipstick");
              }}
            >
              lipstick
            </button>
            <button
              className="block text-xs hover:text-red-700"
              onClick={() => {
                setproductType("eyeshadow");
              }}
            >
              eyeshadow
            </button>
            <button
              className="block text-xs hover:text-red-700"
              onClick={() => {
                setproductType("mascara");
              }}
            >
              mascara
            </button>
            <button
              className="block text-xs hover:text-red-700"
              onClick={() => {
                setproductType("eyebrow");
              }}
            >
              eyebrow
            </button>
            <button
              className="block text-xs text-left hover:text-red-700"
              onClick={() => {
                setproductType("nail_polish");
              }}
            >
              nail polish
            </button>
            <button
              className="block text-xs hover:text-red-700"
              onClick={() => {
                setproductType("foundation");
              }}
            >
              foundation
            </button>
          </div>
          <div>
            <div className="text-left text-xs font-bold mt-2 mb-1">
              Customer Review
            </div>
            {/* // Stars  */}
            <span className="flex items-center mt-1">
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
              <span className="text-gray-600 text-xs ml-1">& Up</span>
            </span>
            <span className="flex items-center mt-1">
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
              <span className="text-gray-600 text-xs ml-1">& Up</span>
            </span>
            <span className="flex items-center mt-1">
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
              <span className="text-gray-600 text-xs ml-1">& Up</span>
            </span>
            <span className="flex items-center mt-1">
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
              <span className="text-gray-600 text-xs ml-1">& Up</span>
            </span>
          </div>
          <div className="text-left text-xs font-bold mt-3 mb-1">
            Deals & Discounts
          </div>
          <div className="text-xs text-left hover:text-red-700">
            Today's Deals
          </div>
        </div>
        {/* Right side  */}
        <div className="w-5/6">
          {/* Products are below */}
          <div>
            <section className="text-gray-600 body-font">
              <div className="container px-5 pb-5 mx-auto">
                <div className="mx-1 my-2 text-black font-semibold text-left">
                  RESULTS
                </div>
                <div className="flex flex-wrap w-full">
                  {/* // */}
                  {productJSON &&
                    productJSON.map((product: any, index: number) => {
                      return (
                        <div
                          key={index}
                          className="lg:w-1/4 md:w-1/2 p-4 w-full border my-1"
                        >
                          <a className="block relative h-48 rounded overflow-hidden">
                            <Link
                              href={`/components/products/ViewProductsInDetail/${product.id}`}
                            >
                              <img
                                alt="ecommerce"
                                className="object-cover object-center w-full h-full block cursor-pointer"
                                src={product.image_link}
                              />
                            </Link>
                          </a>
                          <div className="mt-4">
                            <Link
                              href={`/components/products/ViewProductsInDetail/${product.id}`}
                            >
                              <h2 className="text-black cursor-pointer hover:text-red-600 title-font text-sm text-left font-semibold">
                                {product.name}
                              </h2>
                            </Link>
                            <span className="flex items-center">
                              <svg
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-3 h-3 text-amber-500"
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
                                className="w-3 h-3 text-amber-500"
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
                                className="w-3 h-3 text-amber-500"
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
                                className="w-3 h-3 text-amber-500"
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
                                className="w-3 h-3 text-amber-500"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <span className="text-gray-600 text-xs ml-1">
                                {Math.floor(product.price * 9)} Reviews
                              </span>
                            </span>
                            <div className="flex">
                              <p>₹</p>
                              <p className="text-xl text-black font-semibold">
                                {Math.ceil(product.price * 80)}
                              </p>
                            </div>
                            <p className="text-xs text-left">
                              Buy 2 items, get 5% off
                            </p>
                            <div className="flex my-1">
                              <p className="text-xs text-left">Get it by</p>
                              <p className="text-xs text-left font-bold ml-1">
                                Tomorrow
                              </p>
                            </div>
                            <p className="text-xs text-left">
                              FREE Delivery over ₹499. Fulfilled by Amazon
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  {productJSON && productJSON.length === 0 && (
                    <div className="mx-1">No results found</div>
                  )}
                  {/* // */}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProducts;
