"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
// import { cartContext } from "../App";

export const Navbar = (
  {
    // username
  }
) => {
  // const { cartItems } = useContext(cartContext);
  const [alertstate, setalertstate] = useState(false);

  return (
    <>
      {alertstate && (
        <div
          className="bg-blue-500 flex rounded-xl mt-3 left-1/2 translate-x-[-50%] mx-auto fixed top-0 z-20 border-t border-b border-blue-500 text-white px-4 py-3"
          role="alert"
        >
          <p className="font-semibold">The page is under maintenance.</p>
          <button
            onClick={() => setalertstate(!alertstate)}
            className="font-bold mx-2 hover:underline"
          >
            Ok
          </button>
        </div>
      )}
      {/* // Big Up Navbar */}
      <div className="bg-gray-900 xs:hidden flex h-12 items-center py-2 px-4 sticky top-0 z-10">
        <Link href="/" className="my-auto">
          <img
            alt=""
            className="object-contain h-11 my-auto"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
        <div className="text-white text-xs -mt-1 mr-4">.in</div>
        {/* <div className="text-white mx-2">address</div> */}
        {/* <div> */}
        <div className="flex w-full xs:hidden ">
          <div className="bg-gray-100 flex border-r border-gray-400 px-3 py-2 text-xs rounded-l-md">
            All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-2 h-2 my-auto ml-2 -mr-1 stroke-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <input type="text" placeholder="" className="h-8 w-[100%] px-2 outline-none" />
          <Link href="/components/products/ViewProducts">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 bg-amber-300 p-[8px] cursor-pointer hover:bg-amber-500 rounded-r-md"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </Link>
          {/* </div> */}
        </div>
        <div className="text-white mx-2 cursor-pointer min-w-[153px] relative">
          {/* <div className="text-xs peer">Hello, {username}</div> */}
          <div className="text-xs peer">
            {/* {username ? `Hello ${username}` : "Sign in"} */}
            Hello,
          </div>
          <div className="text-xs font-semibold peer">Account & Lists</div>
          {/* // */}
          <div className="hidden text-black text-left absolute rounded-md peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg">
            <div className="p-4">
              <hr />
              <div className="font-semibold text-sm my-2">Your Lists</div>
              <Link
                href="/wishlist"
                className="text-xs cursor-pointer hover:underline hover:text-red-500"
              >
                Create a Wish List
              </Link>
            </div>
          </div>
          {/* // */}
        </div>
        <div className="xs:hidden text-white mr-2 min-w-[90px]">
          <div className="text-xs">Returns</div>
          <div className="text-xs font-semibold">& Orders</div>
        </div>
        <Link
          href="/components/cart"
          className="text-white text-sm font-semibold flex relative"
        >
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <div className="absolute z-10 text-yellow-500 bg-gray-900 ml-2 -mt-[6px]">
            {/* {cartItems?.length} */}
          </div>
          <div className="mt-auto">Cart</div>
        </Link>
      </div>
      {/* // Small Up Navbar */}
      <div className="bg-gray-900 hidden xs:flex h-12 items-center py-2 px-4 sticky top-0 z-10">
        <div className="flex w-[350px] h-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 stroke-white mr-2 min-w-[32px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <Link href="/" className="my-auto">
            <img
              alt=""
              className="object-contain h-7 my-auto min-w-[77px]"
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
          </Link>
        </div>
        <div className="text-white text-xs -mt-3 mr-4">.in</div>
        {/* <div className="text-white mx-2">address</div> */}
        {/* <div> */}
        <div className="w-full"></div>
        <div className="text-white mx-1 min-w-[153px]">
          {/* <div className="text-xs peer">Hello, {username}</div> */}
          <div className="text-xs peer">
            {/* {username ? `Hello ${username}` : "Sign in"} */}
            Hello,
          </div>
          <div className="text-xs font-semibold">Account & Lists</div>
        </div>
        <div className="xs:hidden text-white mr-2 min-w-[90px]">
          <div className="text-xs">Returns</div>
          <div className="text-xs font-semibold">& Orders</div>
        </div>
        <Link
          href="/components/cart"
          className="text-white text-sm font-semibold flex relative"
        >
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <div className="absolute z-10 text-yellow-500 bg-gray-900 ml-2 -mt-[6px]">
            {/* {cartItems?.length} */}
          </div>
        </Link>
      </div>
      <div className="bg-gray-900 hidden xs:block px-2">
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Search Amazon.in"
            className="h-9 w-[100%] px-2 rounded-l-md outline-none"
          />
          <Link href="/products">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 bg-amber-300 p-[8px] cursor-pointer hover:bg-amber-500 rounded-r-md"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </Link>
          {/* </div> */}
        </div>
      </div>
      {/* // Down Navbar */}
      <div className="bg-gray-800 text-white p-2">
        <div
          onClick={() => setalertstate(!alertstate)}
          className="left_data cursor-pointer font-bold text-xs flex justify-evenly items-center"
        >
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 block xs:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </p>
          <p>
            <i className="fas fa-shopping-cart"></i> All
          </p>
          <p>Sell</p>
          <p className="block xs:hidden">Mobiles</p>
          <p className="">Wish List</p>
          <p className="block xs:hidden">Best Sellers</p>
          <p className="block xs:hidden">Fashion</p>
          <p className="block xs:hidden">Customer Service</p>
          <p className="hidden lg:block xl:block">Electronics</p>
          <p>Prime</p>
          <p>Today's Deals</p>
          <p className="block xs:hidden">Amazon Pay</p>
        </div>
      </div>
    </>
  );
};
