import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../../components/app/home/Categories";
import ProductCard from "../../components/app/home/ProductCard";
import { getAllProducts } from "../store/slices/products.slice";

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
		<main>
			<form onSubmit={handlesubmit}>
				<div>
					<input
						id="nameProduct"
						type="text"
						placeholder="what are you looking for?"
					/>
					<button>
						<i className="bx bx-search"></i>
					</button>
				</div>
			</form>
			<section>
				<Categories setCategory={setCategory} />
				{filterProducts.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</section>
		</main>
	);
};

export default Home;
