import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../../components/app/home/Categories";
import ProductCard from "../../components/app/home/ProductCard";
import { getAllProducts } from "../store/slices/products.slice";
import "./styles/home.css";

const Home = () => {
	const [nameproduct, setNameproduct] = useState("");
	const [filterProducts, setFilterProducts] = useState([]);
	const [category, setCategory] = useState("");
	// console.log(filterProducts);
	const products = useSelector((state) => state.products);

	const dispatch = useDispatch();
	const handlesubmit = (e) => {
		e.preventDefault();
		const newName = e.target.nameProduct.value;
		setNameproduct(newName);
	};

	useEffect(() => {
		dispatch(getAllProducts());
	}, []);
	useEffect(() => {
		setFilterProducts(products);
	}, [products]);
	useEffect(() => {
		const newProducts = products.filter(
			(product) =>
				product.title.includes(nameproduct) &&
				(product.category.id === category || category === "")
		);
		setFilterProducts(newProducts);
		console.log(newProducts);
	}, [nameproduct, category]);

	return (
		<main className="home">
			<form className="home-form" onSubmit={handlesubmit}>
				<div className="home-form-div">
					<input
						className="home-form-input"
						id="nameProduct"
						type="text"
						placeholder="what are you looking for?"
					/>
					<button className="home-form-btn">
						<i className="bx bx-search"></i>
					</button>
				</div>
			</form>
			<Categories setCategory={setCategory} />
			<section className="home-container-products">
				{filterProducts.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</section>
		</main>
	);
};

export default Home;
