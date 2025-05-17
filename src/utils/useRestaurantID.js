import { useEffect, useState } from "react";

export default function useRestaurant(id) {
	const [restaurant, setRestaurant] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchRestaurant = async () => {
			const cachedData = localStorage.getItem(`restaurant-${id}`);

			if (cachedData) {
				setRestaurant(JSON.parse(cachedData));
				setLoading(false);
				return;
			}

			try {
				const res = await fetch(`/api/restaurant?id=${id}`);
				if (!res.ok) throw new Error("Failed to fetch");
				const data = await res.json();
				setRestaurant(data);
				localStorage.setItem(`restaurant-${id}`, JSON.stringify(data));
			} catch (err) {
				console.error("Fetch error:", err);
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		if (id) {
			fetchRestaurant();
		}
	}, [id]);

	return { restaurant, loading, error };
}
