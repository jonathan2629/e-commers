import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<NavLink to="/">
				<h1>e-commerce</h1>
			</NavLink>
			<u>
				<li>
					<NavLink to="/login">
						<i className="bx bx-user"></i>
					</NavLink>
				</li>
				<li>
					<NavLink to="/pruchases">
						<i className="bx bx-box"></i>
					</NavLink>
				</li>
				<li>
					<NavLink to="/cart">
						<i className="bx bx-cart"></i>
					</NavLink>
				</li>
			</u>
		</header>
	);
};

export default Header;
