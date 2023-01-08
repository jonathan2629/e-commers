import axios from "axios";
import React, { useEffect, useState } from "react";
import { getConfig } from "../../utils/configAxios";

const Purchases = () => {
	const [purchases, setpurchases] = useState([]);

	useEffect(() => {
		const URL = "https://e-commerce-api.academlo.tech/api/v1/purchases";
		axios
			.get(URL, getConfig())
			.then((res) => setpurchases(res.data.data.purchases))
			.catch((err) => console.log(err));
	}, []);

	return (
		<main>
			<h2>My purchases</h2>
			<section>{}</section>
		</main>
	);
};

export default Purchases;
