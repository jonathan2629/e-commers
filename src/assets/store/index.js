import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.slice";
import userInfo from "../store/slices/userInfo.slice";
import cart from "../store/slices/cart.slice";
export default configureStore({
	reducer: {
		products,
		userInfo,
		cart,
	},
});
