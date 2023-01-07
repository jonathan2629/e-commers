import React from "react";

const CartProduct = ({ cartProduct }) => {
	return (
		<article>
			<h4>{cartProduct.brand}</h4>
			<h3>{cartProduct.title}</h3>
			<div>
				<p>{cartProduct.cartProduct.quantity}</p>
			</div>
			<footer>
				<h3>
					<span>Total</span>${cartProduct}
				</h3>
			</footer>
			<i className="bx bx-trash"></i>
		</article>
	);
};

export default CartProduct;
