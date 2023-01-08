import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/Cart.css";
import { getAllCartProducts, purchaseCart } from "../store/slices/cart.slice";
import CartProduct from "../../components/cart/CartProduct";

const Cart = () => {
	const cart = useSelector((state) => state.cart);
	const dispacht = useDispatch();

	const handlePurchasecart = () => {
		const data = {
			strret: "green st.1456",
			colony: "southwest",
			zipcode: 1234,
			city: "USA",
			reference: "some reference",
		};
		dispacht(purchaseCart(data));
	};

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
				{!cart.length && <h2>no found products in cart</h2>}
			</section>
			<div className="cart-btn-container">
				<button onClick={handlePurchasecart} className="cart-btn">
					Purchase cart
				</button>
			</div>
		</main>
	);
};

export default Cart;
