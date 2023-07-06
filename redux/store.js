"use client";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducer"; // Import your root reducer
import { createWrapper } from "next-redux-wrapper";

const store = createStore(rootReducer);

const wrapper = createWrapper(() => store);

export { store, wrapper };
