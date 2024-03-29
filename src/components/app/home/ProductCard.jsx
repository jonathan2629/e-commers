import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductCard } from "../../../assets/store/slices/cart.slice";
import "./styles/ProductCard.css";
const ProductsCard = ({ product }) => {
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const handleClickProduct = () => {
		navigate(`/Products/${product.id}`);
	};
	const handleClickAddCart = (e) => {
		e.stopPropagation();
		const data = {
			id: product.id,
			quantity: 1,
		};

		dispatch(addProductCard(data));
	};
	return (
		<article className="ProductCard" onClick={handleClickProduct}>
			<header className="ProductCard-header">
				<img src={product.productImgs[0]} alt="" />
			</header>
			<hr />
			<div className="ProductCard-body">
				<h3 className="ProductCard-title">{product.title}</h3>
				<h4 className="ProductCard-title-price">Price</h4>
				<span className="ProductCard-price">{product.price}</span>
				<button
					className="ProductCard-btn"
					onClick={handleClickAddCart}
				>
					<i className="bx bx-cart" alt="your purchases"></i>
				</button>
			</div>
		</article>
	);
};

export default ProductsCard;
