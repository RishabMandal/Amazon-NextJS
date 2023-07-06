"use client";

// import Footer from "./components/Footer";
// import { MainContent } from "./components/MainContent";
// import { Navbar } from "./components/Navbar";
// import { HashRouter as Router, Routes, Route, Switch } from "react-router-dom";
// import { ViewProducts } from "./components/MainContentComponents/ViewProducts";
// import { ViewProductInDetail } from "./components/MainContentComponents/ViewProductInDetail";
// import { Cart } from "./components/MainContentComponents/Cart";
// import { auth, provider } from "./firebase.js";
// import { signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useMemo, useState } from "react";
// import Address from "./components/MainContentComponents/Payments/Address";
// import PaymentMethod from "./components/MainContentComponents/Payments/PaymentMethod";
// import PaymentPage from "./components/MainContentComponents/Payments/PaymentPage";
// import OTPpage from "./components/MainContentComponents/Payments/OTPpage";
// import WishList from "./components/MainContentComponents/WishList";

// Context
const cartContext = createContext({
  cartItems: [],
  setcartItems: () => {},
  // cartPrice: Number,
  // setcartPrice: () => {},
});
// const wishlistContext = createContext({
//   wishlistItems: [],
//   setwishlistItems: () => {},
// });
const cartPriceContext = createContext({
  cartPrice: Number,
  setcartPrice: () => {},
});

export default function Login() {
  // User sign in
  //   const [signin, setsignin] = useState(false);
  const [signin, setsignin] = useState<boolean>(false);
  const [alertstate, setalertstate] = useState(false);
  const [useremail, setuseremail] = useState<any>();
  const [username, setusername] = useState<any>();

  function handlesignin() {
    signInWithPopup(auth, provider).then((data) => {
      // console.log(data);
      setuseremail(data.user.email);
      setusername(data.user.displayName);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("username", data.user.displayName);
    });
  }

  useEffect(() => {
    setuseremail(localStorage.getItem("email"));
    setusername(localStorage.getItem("username"));
    if (useremail) {
      setsignin(true);
    }
  });

  // Cart
  // const [cartItems, setcartItems] = useState([
  //   { name: "maybelline", quantity: "", price: "", image_link: "" },
  // ]);
  // const [cartItems, setcartItems] = useState();
  const [cartItems, setcartItems] = useState([]);
  const value = useMemo(() => ({ cartItems, setcartItems }), [cartItems]);
  const [cartPrice, setcartPrice] = useState(0);
  const priceValue = useMemo(() => ({ cartPrice, setcartPrice }), [cartPrice]);

  // Wish List
  // const [wishlistItems, setwishlistItems] = useState([]);
  // const wishlistValue = useMemo(
  //   () => ({ wishlistItems, setwishlistItems }),
  //   [wishlistItems]
  // );

  return (
    <div className="App">
      {/* {!signin && ( */}
      {true && (
        <div className="min-h-[90vh] bg-gray-50">
          {/* Error alert  */}
          {alertstate && (
            <div
              className="bg-red-100 w-screen fixed top-0 border border-red-400 text-red-700 px-4 py-3 rounded"
              role="alert"
            >
              <strong className="font-bold">Error! </strong>
              <span className="block sm:inline">Invalid username</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  onClick={() => setalertstate(!alertstate)}
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}
          <div>
            <img
              alt=""
              className="object-contain w-[200px] mx-auto mt-5 bg-black"
              src="https://imgs.search.brave.com/KG4aOB3IozuOykhf0bB5_01oSh-MX2z904X1WGRi5Tg/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/ZGtRR21oQjljMlNy/ODRGZUREOWVnSGFF/SyZwaWQ9QXBp"
            />
          </div>
          <div className="mx-auto my-5 border rounded-md w-fit p-8 text-left max-w-[600px]">
            <div className="mt-3 mb-4 text-4xl ">Sign in</div>
            <div className="text-red-800 font-semibold my-1">
              Email or mobile phone number
            </div>
            <input
              className="rounded-md p-2 border-2 w-full border-gray-700"
              placeholder="Phone, email, or username"
              type="text"
            />
            <div
              onClick={() => setalertstate(!alertstate)}
              className="my-4 text-center cursor-pointer px-10 py-1 text-md bg-[#f0c14b] border border-yellow-700 rounded-md"
            >
              Continue
            </div>
            <div>
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </div>
          </div>
          <div className="text-gray-600 w-fit px-2 inline-block bg-gray-50 z-20">
            New to Amazon?
          </div>
          <div className="border-t -mt-3 mb-7 max-w-[600px] mx-auto"></div>
          <div
            // onClick={handlesignin}
            className="cursor-pointer mx-auto max-w-[600px] flex px-10 py-1 bg-gray-200 border border-gray-500 rounded-md"
          >
            {/* <img
              className="w-4 h-4 mr-2 my-1 bg-gray-300"
              src="data:image/png;base64,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"
              alt=""
            /> */}
            <button onClick={handlesignin} className="my-1 mx-auto">
              Sign in with Google
            </button>
          </div>
        </div>
      )}
      {/* <cartContext.Provider value={(cartItems, setcartItems)}> */}
      {/* <cartContext.Provider value={cartItems}> */}
      {/* <cartContext.Provider value={value}>
        <cartPriceContext.Provider value={priceValue}>
          {signin && (
            <Router>
              <Navbar username={username} />
              <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/products" element={<ViewProducts />} />
                <Route
                  path="/products/detail"
                  element={<ViewProductInDetail />}
                />
                <Route
                  path="/getproductsone/:id"
                  element={
                    <ViewProductInDetail
                      wishlistItems={wishlistItems}
                      setwishlistItems={setwishlistItems}
                    />
                  }
                />
                <Route path="/getcart" element={<Cart />} />
                <Route path="/address" element={<Address />} />
                <Route path="/paymentmethod" element={<PaymentMethod />} />
                <Route path="/paymentpage" element={<PaymentPage />} />
                <Route path="/OTPpage" element={<OTPpage />} />
                <Route
                  path="/wishlist"
                  element={
                    <WishList
                      wishlistItems={wishlistItems}
                      setwishlistItems={setwishlistItems}
                    />
                  }
                />
              </Routes>
              <Footer />
            </Router>
          )}
        </cartPriceContext.Provider>
      </cartContext.Provider> */}
    </div>
  );
}

export { cartContext, cartPriceContext };
