import React from "react";
import { useDispatch } from "react-redux";
import { deleteProductscart } from "../../assets/store/slices/cart.slice";
import "./styles/CartProduct.css";
const CartProduct = ({ cartProduct }) => {
	const dispatch = useDispatch();

	const handleDeleteproduct = () => {
		dispatch(deleteProductscart(cartProduct?.id));
	};

	return (
		<article className="cartproduct">
			<h4 className="cartproduct-brand">{cartProduct.brand}</h4>
			<h3 className="cartproduct-title">{cartProduct.title}</h3>
			<div className="cartproduct-quantity">
				<p>{cartProduct?.productsInCart.quantity}</p>
			</div>
			<footer className="cartproduct-footer">
				<h3 className="cartproduct-price">
					<span className="cartproduct-price-title">Total</span>$
					{(
						cartProduct.productsInCart.quantity * cartProduct.price
					).toFixed(2)}
				</h3>
			</footer>
			<i
				onClick={handleDeleteproduct}
				className="cartproduct-trash bx bx-trash"
			></i>
		</article>
	);
};

export default CartProduct;
