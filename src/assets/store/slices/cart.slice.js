import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getConfig } from "../../../utils/configAxios";
const BASE_URL = "https://e-commerce-api.academlo.tech/api/v1/";
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
	const URL = `${BASE_URL}cart`;
	axios
		.get(URL, getConfig())
		.then((res) => dispacht(setCartGlobal(res.data.data.cart.products)))
		.catch((err) => console.log(err));
};
export const addProductCard = (data) => (dispacht) => {
	const URL = `${BASE_URL}cart`;
	axios
		.post(URL, data, getConfig())
		.then((res) => console.log(res.data))
		.catch((err) => console.log(err));
};
export const deleteProductscart = (id) => (dispatch) => {
	const URL = `${BASE_URL}cart/${id}`;
	axios
		.delete(URL, getConfig())
		.then((res) => dispatch(getAllCartProducts()))
		.catch((err) => console.log(err));
};
export const purchaseCart = (data) => (dispatch) => {
	const URL = `${BASE_URL}purchases`;
	axios
		.post(URL, data, getConfig())
		.then((res) => dispatch(setCartGlobal([])))
		.catch((err) => console.log(err));
};
