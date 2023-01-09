import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./styles/Productinfo.css";
const ProductInfo = ({ product }) => {
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();
	const handleMinus = () => {
		const newValue = quantity - 1;
		if (newValue >= 1) {
			setQuantity(newValue);
		}
	};
	const handlePlus = () => {
		setQuantity(quantity + 1);
	};
	const handleAddProduct = () => {
		const data = {
			id: product.id,
			quantity: quantity,
		};
		dispatch(addProductCard(data));
	};

	return (
		<article className="productInfo">
			<h2 className="productInfo-title">{product.title}</h2>
			<p className="productInfo-description">{product.description}</p>
			<footer className="productInfo-footer">
				<div className="productInfo-container-price">
					<h3 className="productInfo-price-title">price</h3>
					<span className="productInfo-price">{product.price}</span>
				</div>
				<div className="productInfo-container-quantity">
					<h3 className="productInfo-quatity-title">Quantity</h3>
					<div className="productInfo-container-counter">
						<div
							className="productInfo-minus"
							onClick={handleMinus}
						>
							-
						</div>
						<div className="productInfo-counter">{quantity}</div>
						<div className="productInfo-plus" onClick={handlePlus}>
							+
						</div>
					</div>
				</div>
				<button onClick={handleAddProduct} className="productInfo-btn">
					Add to Cart
					<i className="bx bx-cart"></i>
				</button>
			</footer>
		</article>
	);
};

export default ProductInfo;
