import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/header.css";
const Header = () => {
	return (
		<header className="header">
			<NavLink to="/" className="header-pageName">
				<h1>e-commerce</h1>
			</NavLink>
			<u className="header-navBar">
				<li className="header-link">
					<NavLink to="/login">
						<i className="bx bx-user" alt="login"></i>
					</NavLink>
				</li>
				<li className="header-link">
					<NavLink to="/purchases">
						<i className="bx bx-box" alt="your purchases"></i>
					</NavLink>
				</li>
				<li className="header-link">
					<NavLink to="/cart">
						<i className="bx bx-cart" alt="your cart"></i>
					</NavLink>
				</li>
			</u>
		</header>
	);
};

export default Header;
