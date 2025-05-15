"use client";
import { useParams } from "next/navigation";
import restaurants from "@/utils/mockdata";
import NavBar from "@/components/shared/navbar";
import RestaurantHeader from "@/components/restaurant/header";
import RestaurantMap from "@/components/restaurant/map";
import RestaurantLink from "@/components/restaurant/link";
import RestaurantHours from "@/components/restaurant/hours";
import RestaurantPhone from "@/components/restaurant/phone_number";
import RestaurantTags from "@/components/restaurant/tags";

export default function RestaurantPage() {
	const params = useParams();
	const restaurant = restaurants.find((r) => r.id.toString() === params.id);

	if (!restaurant) {
		return (
			<div>
				<h1>restaurant not found ...</h1>
			</div>
		);
	}

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
