import React from "react";
import { useNavigate } from "react-router-dom";

const ProductsCard = ({ product }) => {
	const navigate = useNavigate()

	const handleClickProduct =()=>{
		navigate(`/Products/${product.id}`)
		
	}
	const handleClickAddCart =(e)=>{
		e.stopPropagation()
		console.log("pruducts added to cart");

	}
	return (
		<article onClick={handleClickProduct}>
			<header>
				<img src={product.productImgs[0]} alt="" />
			</header>
			<div>
				<h3>{product.title}</h3>
				<h4>Price</h4>
				<span>{product.price}</span>
				<button onClick={handleClickAddCart }>
					<i className="bx bx-cart"></i>
				</button>
			</div>
		</article>
	);
};

export default ProductsCard;
