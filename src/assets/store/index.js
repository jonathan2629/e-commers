import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.slice";
import userInfo from "../store/slices/userInfo.slice";
export default configureStore({
	reducer: {
		products,
		userInfo,
	},
});
