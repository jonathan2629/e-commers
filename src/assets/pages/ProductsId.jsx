import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "../../components/ProductId/ProductInfo";
import SimilarProducts from "../../components/ProductId/SimilarProducts";

const ProductsId = () => {
	const [product, setProduct] = useState();
	const [categories, setCategories] = useState()
	console.log(product);
	const { id } = useParams();

	useEffect(() => {
		const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`;
		axios
			.get(URL)
			.then((res) => setProduct(res.data.data.product))
			.catch((err) => console.log(err));
	}, []);
	useEffect(() => {

	  const URL ="https://e-commerce-api.academlo.tech/api/v1/products/categories"
	  axios
	  .get(URL)
	  .then((res) => setCategories(res.data.data.categories))
	  .catch((err) => console.log(err));
	
	}, [])
	

	return (
		<main>
			<ProductInfo product={product} />
			<SimilarProducts  product={product} categories={categories}/>
		</main>
	);
};

export default ProductsId;
