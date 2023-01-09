import React from "react";

const ProductPurchase = ({ productpurchase }) => {
	return (
		<article className="productpurchase">
			<h4 className="productpurchase-title">{productpurchase.title}</h4>
			<h4 className="productpurchase-quantity">
				{productpurchase.productsInCart.quantity}
			</h4>
			<h4 className="productpurchase-price">
				{(
					productpurchase.productsInCart.quantity *
					productpurchase.price
				).toFixed(2)}
			</h4>
		</article>
	);
};

export default ProductPurchase;
