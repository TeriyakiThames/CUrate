import { useEffect, useState } from "react";

export default function useRestaurant(id) {
	const [restaurant, setRestaurant] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchRestaurant = async () => {
			try {
				const res = await fetch(`/api/restaurant?id=${id}`);
				if (!res.ok) throw new Error("Failed to fetch");
				const data = await res.json();
				console.log("Fetched restaurant data:", data);
				setRestaurant(data);
			} catch (err) {
				console.error("Fetch error:", err);
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		if (id) {
			console.log("Fetching restaurant with id:", id);
			fetchRestaurant();
		}
	}, [id]);

	return { restaurant, loading, error };
}
