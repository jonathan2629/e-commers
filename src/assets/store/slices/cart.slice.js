import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getConfig } from "../../../utils/configAxios";

const cartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		setCartGlobal: (state, action) => action.payload,
	},
});
export const { setCartGlobal } = cartSlice.actions;
export default cartSlice.reducer;

export const getAllCartProducts = () => (dispacht) => {
	const URL = "https://e-commerce-api.academlo.tech/api/v1/cart";
	axios
		.get(URL, getConfig())
		.then((res) => dispacht(setCartGlobal(res.data.data.cart.products)))
		.catch((err) => console.log(err));
};
