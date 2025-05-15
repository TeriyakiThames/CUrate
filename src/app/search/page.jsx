import NavBar from "@/components/shared/navbar";
import ScrollCard from "@/components/search/scrollcard";
import SearchBar from "@/components/search/searchbar";
import restaurants from "@/utils/mockdata";
import {
	cheapRestaurants,
	expensiveRestaurants,
	samyanRestaurants,
	chulaRestaurants,
} from "@/utils/filtered_data";

export default function Search() {
	return (
		<div>
			<SearchBar />
			<ScrollCard title={"Cheap Restaurants"} data={cheapRestaurants} />
			<ScrollCard title={"Expensive Restaurants"} data={expensiveRestaurants} />
			<ScrollCard title={"Near Chula"} data={chulaRestaurants} />
			<ScrollCard title={"In Samyan Mitrtown"} data={samyanRestaurants} />
			<ScrollCard title={"All Restaurants"} data={restaurants} />
			<div className="pb-[100px]"></div>
			<NavBar />
		</div>
	);
}
