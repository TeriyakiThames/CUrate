import { useEffect, useState } from "react";

export default function useRestaurant(id) {
	const [restaurant, setRestaurant] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	// Fetch restaurant data when the component mounts or when id changes
	useEffect(() => {
		const fetchRestaurant = async () => {
			try {
				const res = await fetch(`/api/restaurant?id=${id}`);
				if (!res.ok) throw new Error("Failed to fetch");
				const data = await res.json();
				setRestaurant(data);
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
