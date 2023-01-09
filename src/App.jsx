import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";
import ProductsId from "./assets/pages/ProductsId";
import Purchases from "./assets/pages/Purchases";
import Cart from "./Cart";

import ProtectedRoutes from "./components/app/ProtectedRoutes";
import Header from "./layout/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" s element={<Home />} />

				<Route path="/login" element={<Login />} />
				<Route path="/Products/:id" element={<ProductsId />} />
				<Route element={<ProtectedRoutes />}>
					<Route path="/Purchases" element={<Purchases />} />
					<Route path="/cart" element={<Cart />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
