"use client";

import { useParams } from "next/navigation";
import NavBar from "@/components/shared/navbar";
import RestaurantHeader from "@/components/restaurant/header";
import RestaurantMap from "@/components/restaurant/map";
import RestaurantLink from "@/components/restaurant/link";
import RestaurantHours from "@/components/restaurant/hours";
import RestaurantPhone from "@/components/restaurant/phone_number";
import RestaurantTags from "@/components/restaurant/tags";
import useRestaurant from "@/utils/useRestaurantID";

const mockdata = {
	name: "Loading",
	foodOrigin: "Loading",
	phone: "Loading",
	hours: "Loading",
	priceRange: "Loading",
	tags: ["Loading", "Loading", "Loading"],
	location: "Loading",
};

export default function RestaurantPage() {
	const params = useParams();
	const id = Array.isArray(params.id) ? params.id[0] : params.id;

	const { restaurant, loading, error } = useRestaurant(id);

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
