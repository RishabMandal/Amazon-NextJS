"use client"

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// import { wishlistContext } from "../../App";

function WishList({ wishlistItems, setwishlistItems }) {
//   const { wishlistItems, setwishlistItems } = useContext(wishlistContext);
  return (
    <div className="min-h-[60vh] p-3">
      <div className="border text-left">
        <div className="text-xl p-2 font-semibold text-red-600 border-t border-r border-r-gray-200 border-red-600 inline-block">Your Lists</div>
        <hr />
        <div className="bg-white text-left p-3 text-black">
          <div className="flex">
            <div className="text-xs mt-7 ml-auto">Price</div>
          </div>
          <hr />
          {wishlistItems.length ? (
            wishlistItems.map((item, index) => {
              return (
                <div key={index} className="flex py-2 border-t-2">
                  <NavLink to={`/getproductsone/${item.id}`}>
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
            <div className="my-4 text-xl font-semibold">
              Your Amazon Wish List is empty.
            </div>
          )}
          <hr />
          <div className="text-xs my-4">
            The price and availability of items at Amazon.in are subject to
            change. The shopping cart is a temporary place to store a list of
            your items and reflects each item's most recent price. Do you have a
            promotional code? We'll ask you to enter your claim code when it's
            time to pay.
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishList;
