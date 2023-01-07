import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCartProducts } from "./assets/store/slices/cart.slice";
import CartProduct from "./components/cart/CartProduct";

const Cart = () => {
	const dispacht = useDispatch();
	const cart = useSelector((state) => state.cart);
	useEffect(() => {
		dispacht(getAllCartProducts());
	}, []);

	return (
		<main>
			<section>
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
