"use client"

import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
// import { cartPriceContext } from "../../../App";

export default function PaymentPage() {
  // const { cartPrice } = useContext(cartPriceContext);
  const [visible, setvisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setvisible(true);
    }, 1000);
  }, []);

  return (
    <div className="bg-gray-200">
      {/* // Redirecting  */}
      {!visible && (
        <div className="text-left text-lg min-h-[80vh] p-4">
          <div className="text-3xl my-4 font-semibold">
            Securely redirecting you to Amazon Pay...
          </div>
          <div className="mt-10">Please do not close or leave this page.</div>
          <div className="my-5">
            You will return to Amazon.in when finished.
          </div>
          <button className="bg-yellow-400 text-md py-2 max-w-[499px] w-full rounded-lg my-2 hover:bg-yellow-500">
            Continue
          </button>
        </div>
      )}
      {/* // Normal Pay i.e Amazon Pay */}
      {/* <div className="border">
        <div className="text-3xl font-semibold">
          Enter One-Time Password (OTP)
        </div>
        <div className="text-red-600 my-2 text-2xl font-semibold">
          Order Total: .00
        </div>
        <div className="w-fit mx-auto p-6 border border-gray-400 bg-white">
          <div className="text-lg font-semibold">
            Please authenticate your payment using One-Time Password (OTP).
          </div>
          <input
            type="text"
            className="p-3 rounded-md block mt-1 mb-4 mx-auto w-full border border-gray-600"
            placeholder="Enter OTP"
          />
          <button className="bg-yellow-400 mx-auto block text-md py-2 w-full rounded-lg my-4 hover:bg-yellow-500">
            Confirm OTP
          </button>
          <div className="flex space-x-4">
            <div className="font-semibold ">
              Your bank has sent an OTP to your registered
            </div>
            <button className="border font-semibold border-gray-400 p-2 rounded-md bg-gray-200">
              Resend OTP
            </button>
          </div>
          <div className="text-gray-600">Try this fast and</div>
        </div>
      </div> */}
      {/* // RazorPay  */}
      {visible && (
        <div className="py-12">
          <div className="p-12 border text-left bg-gray-100 w-fit xs:w-screen mx-auto border-gray-300 rounded-xl shadow-md">
            <div className="mb-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Razorpay_logo.svg/800px-Razorpay_logo.svg.png?20171127075036"
                alt=""
                className="h-10 rounded-lg"
              />
            </div>
            <div className="flex">
              <div className="w-[200px] mb-4 rounded-lg border-4 border-blue-500 text-blue-500 p-4 bg-white">
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
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
                <div className="font-bold text-xl">Card</div>
              </div>
              <div></div>
            </div>
            <div className="text-xl mb-1">Card number</div>
            <input
              type="number"
              placeholder="1234 1234 1234 1234"
            //   onChange={(event) => {}}
              className="p-4 text-xl w-full shadow-md rounded-lg border border-gray-300 bg-white"
            />
            <div className="flex xs:flex-col mt-3 space-x-4 xs:space-x-0">
              <div>
                <div className="text-xl mb-1">Expiry</div>
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="p-4 text-xl shadow-md rounded-lg border border-gray-300 bg-white"
                />
              </div>
              <div>
                <div className="text-xl mb-1">CVV</div>
                <input
                  type="number"
                  placeholder="CVV"
                  className="p-4 text-xl shadow-md rounded-lg border border-gray-300 bg-white"
                />
              </div>
            </div>
            <div className="flex my-3 xs:flex-col space-x-4 xs:space-x-0">
              <div>
                <div className="text-xl mb-1">Country</div>
                <input
                  type="text"
                  placeholder="India"
                  className="p-4 text-xl shadow-md rounded-lg border border-gray-300 bg-white"
                />
              </div>
              <div>
                <div className="text-xl mb-1">Mobile number</div>
                <input
                  type="number"
                  placeholder="Eg. 9714008888"
                  className="p-4 text-xl shadow-md rounded-lg border border-gray-300 bg-white"
                />
              </div>
            </div>
            <div className="text-gray-600 my-1 text-lg max-w-[650px]">
              By providing your card information, you allow Amazon to charge
              your card for future payments in accordance with their terms.
            </div>
            <Link href="/components/user/payment/OTPpage">
              <button className="bg-blue-500 hover:bg-blue-600 font-bold text-xl text-white w-full p-4 rounded-lg my-4">
                {/* Pay Now ₹{cartPrice}.00 */}
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
