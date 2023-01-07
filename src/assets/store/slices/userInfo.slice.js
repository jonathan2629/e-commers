import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const defaultValues = {
	token: "",
	user: {},
};

const userInfoSlice = createSlice({
	name: "userInfo",
	initialState: JSON.parse(localStorage.getItem("userInfo")) ?? defaultValues,
	reducers: {
		setUserInfoGlobal: (state, action) => action.payload,
	},
});
export const { setUserInfoGlobal } = userInfoSlice.actions;
export default userInfoSlice.reducer;
export const loginUserThunk = (data) => (dispacht) => {
	const URL = "https://e-commerce-api.academlo.tech/api/v1/users/login";
	axios
		.post(URL, data)
		.then((res) => {
			dispacht(setUserInfoGlobal(res.data.data));
			localStorage.setItem("userInfo", JSON.stringify(res.data.data));
		})
		.catch((err) => console.log(err));
};
export const logOutThunk = () => (dispacht) => {
	localStorage.removeItem("userInfo");
	dispacht(setUserInfoGlobal(defaultValues));
};
