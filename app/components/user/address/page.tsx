"use client"

import Link from "next/link";
import React from "react";

export default function Address() {
  return (
    <div className="bg-gray-200 min-h-[60vh]">
      <div className="flex p-4">
        {/* left part  */}
        <div className="w-3/5 bg-white text-left p-3 text-black">
          <div className="text-2xl font-semibold">
            Choose a delivery address
          </div>
          <div>
            <div className="font-semibold text-xl mt-5">
              No saved addresses found
            </div>
            <div className="font-semibold text-xl mt-5">Add a new address</div>
            <div>Be sure to click "Add" when you've finished</div>
            <div className="font-semibold mt-5">Full name:</div>
            <input
              type="text"
              className="border-2 border-gray-300 shadow-sm py-1 px-3 w-full rounded-md mb-2"
            />
            <div className="font-semibold mt-2">Mobile number:</div>
            <input
              type="number"
              className="border-2 border-gray-300 shadow-sm py-1 px-3 w-full rounded-md mb-2"
            />
            <div className="font-semibold mt-2">Pincode:</div>
            <input
              type="number"
              className="border-2 border-gray-300 shadow-sm py-1 px-3 w-full rounded-md mb-2"
            />
            <div className="font-semibold mt-2">Address Line 1:</div>
            <div className="font-semibold text-sm mb-1">(or company name)</div>
            <input
              type="text"
              className="border-2 border-gray-300 shadow-sm py-1 px-3 w-full rounded-md mb-2"
            />
            <div className="font-semibold mt-2">Address Line 2:</div>
            <div className="font-semibold text-sm mb-1">(optional)</div>
            <input
              type="text"
              className="border-2 border-gray-300 shadow-sm py-1 px-3 w-full rounded-md mb-2"
            />
          </div>
          <button
            onClick={() =>
              alert(
                "Address added, but would be saved for this transaction only."
              )
            }
            className="bg-yellow-400 text-sm py-2 w-full rounded-lg my-4 hover:bg-yellow-500"
          >
            Add
          </button>
        </div>
        {/* right part  */}
        <div className=" w-5/12 px-3">
          <div className="bg-white text-left p-4 text-black">
            <Link href="/components/user/payment/PaymentMethod">
              <button className="bg-yellow-400 text-sm py-2 w-full rounded-lg my-2 hover:bg-yellow-500">
                Use this address
              </button>
            </Link>
            <div className="text-sm">Deliver to this address</div>
          </div>
        </div>
      </div>
    </div>
  );
}
