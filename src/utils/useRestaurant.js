import { useEffect, useState } from "react";

export default function useRestaurant() {
	const [restaurantData, setRestaurantData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchRestaurants = async () => {
			try {
				const res = await fetch("/api/search");
				if (!res.ok) throw new Error("Failed to fetch");
				const data = await res.json();
				console.log("Fetched restaurant list:", data);
				setRestaurantData(data);
			} catch (err) {
				console.error("Fetch error:", err);
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		fetchRestaurants();
	}, []);

	const filterData = (type) => {
		switch (type) {
			case "cheap":
				return restaurantData.filter((r) => r.priceRange === 1);
			case "expensive":
				return restaurantData.filter((r) => r.priceRange === 3);
			case "chula":
				return restaurantData.filter((r) =>
					r.location?.toLowerCase().includes("chula")
				);
			case "samyan":
				return restaurantData.filter((r) =>
					r.location?.toLowerCase().includes("samyan")
				);
			default:
				return restaurantData;
		}
	};

	return { restaurantData, loading, error, filterData };
}
