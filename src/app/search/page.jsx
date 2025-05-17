"use client";

import NavBar from "@/components/shared/navbar";
import ScrollCard from "@/components/search/scrollcard";
import SearchBar from "@/components/search/searchbar";
import useRestaurant from "@/utils/useRestaurant";

export default function Search() {
	const { restaurantData, loading, error, filterData } = useRestaurant();

	if (loading)
		return (
			<div>
				<SearchBar />
				<span>Loading restaurants...</span>
				<NavBar />
			</div>
		);
	if (error || !restaurantData.length)
		return (
			<div>
				<SearchBar />
				<span>Error loading restaurants...</span>
				<NavBar />
			</div>
		);

	return (
		<div>
			<SearchBar />
			<ScrollCard title={"Cheap Restaurants"} data={filterData("cheap")} />
			<ScrollCard
				title={"Expensive Restaurants"}
				data={filterData("expensive")}
			/>
			<ScrollCard title={"Near Chula"} data={filterData("chula")} />
			<ScrollCard title={"In Samyan Mitrtown"} data={filterData("samyan")} />
			<ScrollCard title={"All Restaurants"} data={restaurantData} />
			<div className="pb-[100px]"></div>
			<NavBar />
		</div>
	);
}
