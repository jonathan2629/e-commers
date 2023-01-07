import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk, logOutThunk } from "../store/slices/userInfo.slice";

const Login = () => {
	const { token, user } = useSelector((state) => state.userInfo);
	const { register, handleSubmit } = useForm();
	const dispacht = useDispatch();
	const submit = (data) => {
		dispacht(loginUserThunk(data));
	};
	const handleClickLogout = () => {
		dispacht(logOutThunk());
	};
	return (
		<main className="login">
			{token ? (
				<section className="login-logged">
					<i className=" logged-icon bx bx-user-circle"></i>
					<h3 className="login-logged-name">{`${user.firstName} ${user.lastName}`}</h3>
					<button
						className="login-logged-btn"
						onClick={handleClickLogout}
					>
						LogOut
					</button>
				</section>
			) : (
				<form className="login-form" onSubmit={handleSubmit(submit)}>
					<h3 className="login-title">
						welcome! Enter you email and password to continue
					</h3>
					<div className="login">
						<h4>test Data</h4>
						<p className="bx bx-envelope">john@gmail.com</p>
						<p className="bx bx-lock">john1234</p>
					</div>
					<div>
						<label>Eamil</label>
						<input type="email" {...register("email")} />
					</div>
					<div>
						<label>Password</label>
						<input type="password" {...register("password")} />
					</div>
					<button>Login</button>
					<p>
						Dont`t have an account? <span>sing Up</span>{" "}
					</p>
				</form>
			)}
		</main>
	);
};

export default Login;
