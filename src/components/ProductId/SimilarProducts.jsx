import axios from "axios";
import React, { useEffect } from "react";

const SimilarProducts = ({ product, categories }) => {
	// console.log(product, categories);
	useEffect(() => {
		const category = categories.filter(category => category.name ===product.category);
		const URL ="https:/e-commerce-api.academlo.tech/api/v1/products?category=2";

		axios
			.get(URL)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	}, []);

	return <section>

  </section>;
};

export default SimilarProducts;
