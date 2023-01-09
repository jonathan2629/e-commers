import axios from "axios";
import React, { useEffect, useState } from "react";
import PurchaseCard from "../../components/purchases/PurchaseCard";
import { getConfig } from "../../utils/configAxios";
import "./styles/Purchases.css";

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
		<main className="purchases">
			<h2>My purchases</h2>
			<section className="purchases-list">
				{purchases.map((purchase) => (
					<PurchaseCard key={purchase.id} purchase={purchase} />
				))}
			</section>
		</main>
	);
};

export default Purchases;
