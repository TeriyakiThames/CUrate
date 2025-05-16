"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import NavBar from "@/components/shared/navbar";
import RestaurantHeader from "@/components/restaurant/header";
import RestaurantMap from "@/components/restaurant/map";
import RestaurantLink from "@/components/restaurant/link";
import RestaurantHours from "@/components/restaurant/hours";
import RestaurantPhone from "@/components/restaurant/phone_number";
import RestaurantTags from "@/components/restaurant/tags";

export default function RestaurantPage() {
	const mockdata = {
		name: "Loading",
		// imageUrl:
		// 	"https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrxJsjB7SDnRDWDW7_uKeaHAFHbGyH8Hv0QitIqB2YuX--Jg8aS03wrmUclZfYVuQO_Li2h1owV3abB3-njt2OHNxVoEldF5QvuGlJH9XBFei-UWh6lSnmSPUoa-dCIUBS9WwKynw=s1360-w1360-h1020-rw",
		foodOrigin: "Loading",
		phone: "Loading",
		hours: "Loading",
		priceRange: "Loading",
		tags: ["Loading", "Loading", "Loading"],
		location: "Loading",
	};

	const params = useParams();
	const id = Array.isArray(params.id) ? params.id[0] : params.id;

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

	if (loading)
		return (
			<div>
				<RestaurantHeader data={mockdata} />
				<RestaurantTags data={mockdata} />
				<RestaurantPhone data={mockdata} />
				<RestaurantHours data={mockdata} />

				<NavBar />
			</div>
		);
	if (error || !restaurant) return <div>Restaurant not found...</div>;

	return (
		<div>
			<RestaurantHeader data={restaurant} />
			<RestaurantTags data={restaurant} />
			<RestaurantPhone data={restaurant} />
			<RestaurantHours data={restaurant} />
			<RestaurantLink data={restaurant} />
			<RestaurantMap data={restaurant} />
			<NavBar />
		</div>
	);
}
