import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/Cart.css";
import { getAllCartProducts } from "../store/slices/cart.slice";
import CartProduct from "../../components/cart/CartProduct.jsx";

const Cart = () => {
	const cart = useSelector((state) => state.cart);
	const dispacht = useDispatch();
	useEffect(() => {
		dispacht(getAllCartProducts());
	}, []);

	return (
		<main className="cart">
			<section className="cart-list">
				{cart.map((cartProduct) => (
					<CartProduct
						key={cartProduct.id}
						cartProduct={cartProduct}
					/>
				))}
			</section>
		</main>
	);
};

export default Cart;
