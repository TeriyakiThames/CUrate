import { useEffect, useState } from "react";

export default function useRestaurant() {
	const [restaurantData, setRestaurantData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	// Fetch restaurant data when the component mounts
	useEffect(() => {
		const fetchRestaurants = async () => {
			const cachedData = localStorage.getItem("restaurants");

			if (cachedData) {
				setRestaurantData(JSON.parse(cachedData));
				setLoading(false);
				return;
			}

			try {
				const res = await fetch("/api/search");
				if (!res.ok) throw new Error("Failed to fetch");
				const data = await res.json();
				localStorage.setItem("restaurants", JSON.stringify(data));
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

	// Function to filter restaurant data based on type
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
