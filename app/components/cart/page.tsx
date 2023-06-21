"use client";

import React, { useContext } from "react";
import Slide from "../MainContentComponents/Slide";
import Link from "next/link";
// import { cartContext, cartPriceContext } from "../../App";
// import { NavLink } from "react-router-dom";

export const Cart = () => {
  // const { cartItems, setcartItems } = useContext(cartContext);
  // const { cartPrice, setcartPrice } = useContext(cartPriceContext);

  // console.log(cartContext1);
  //   console.log(cartItems);
  //   console.log(cartPrice);

  return (
    <div className="bg-gray-200 min-h-[60vh]">
      <div>
        {/* <div>Cart</div> */}
        {/* <div>{cartItems[1].name}</div> */}
      </div>
      <div className="flex p-4">
        {/* left part */}
        <div className="w-3/5 bg-white text-left p-3 text-black">
          <div className="flex">
            <div className="font-semibold text-2xl mb-3">Shopping Cart</div>
            <div className="text-xs mt-7 ml-auto">Price</div>
          </div>
          <hr />
          {/* {cartItems.length ? (
            cartItems.map((item, index) => {
              return (
                <div key={index} className="flex py-2 border-t-2">
                  <NavLink href={`/getproductsone/${item.id}`}>
                    <img
                      src={item.image_link}
                      className="cursor-pointer m-2"
                      alt=""
                    />
                  </NavLink>
                  <div className="font-semibold mt-1 mx-3">
                    {item.name}
                    <div className="text-xs font-normal">
                      <div className="text-green-700">In stock</div>
                      <div>Sold by {item.name.split(" ").at(0)}</div>
                      <div>
                        Gift options not available.
                        <a className="hover:text-red-700 cursor-pointer hover:underline ml-1">
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto mr-2 mt-1 font-bold">
                    ₹{item.price}.00
                  </div>
                  <div>{item.quantity}</div>
                </div>
              );
            })
          ) : (
            <div className="my-4 text-xl font-semibold">Your Amazon Cart is empty.</div>
          )} */}
          <hr />
          <div className="flex justify-end">
            <div className="text-right">
              {/* Subtotal ({cartItems && cartItems.length} item): */}
            </div>
            {/* <div className="text-right font-bold ml-1">₹{cartPrice}.00</div> */}
          </div>
          <div className="text-xs my-4">
            The price and availability of items at Amazon.in are subject to
            change. The shopping cart is a temporary place to store a list of
            your items and reflects each item's most recent price. Do you have a
            promotional code? We'll ask you to enter your claim code when it's
            time to pay.
          </div>
        </div>
        {/* right part */}
        <div className=" w-5/12 px-3">
          <div className="bg-white text-left p-4 text-black">
            <div className="text-sm flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 mr-2 stroke-white fill-green-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Your first order qualifies for FREE Delivery. Select this option
              at checkout. Details
            </div>
            <div className="flex mt-3">
              <div className="text-right">
                {/* Subtotal ({cartItems && cartItems.length} item): */}
              </div>
              {/* <div className="text-right font-bold ml-1">₹{cartPrice}.00</div> */}
            </div>
            <Link href="/components/user/address">
              <button className="bg-yellow-400 text-sm py-2 w-full rounded-lg my-2 hover:bg-yellow-500">
                Proceed to Buy
              </button>
            </Link>
            <div></div>
          </div>
          <div className="bg-white text-left p-4 mt-4 border-2 border-gray-300 rounded-md text-black">
            <div className="text-sm font-bold">
              Products related to items in your cart
            </div>
            <div className="text-xs my-2">Sponsored</div>
          </div>
        </div>
      </div>
      <div className="pr-4 pb-2">
        <hr />
        <hr />
        <Slide
          title="Customers who bought items in your Recent History also bought"
          productType="foundation"
        />
        <hr />
        <hr />
        <Slide
          title="Inspired by your browsing history"
          productType="eyeliner"
        />
        <Slide
          title="Customers who viewed items in your browsing history also viewed"
          productType="mascara"
        />
      </div>
    </div>
  );
};

export default Cart;
