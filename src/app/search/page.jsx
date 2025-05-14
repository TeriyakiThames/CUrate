import NavBar from "@/components/shared/navbar";
import ScrollCard from "@/components/search/scrollcard";
import SearchBar from "@/components/search/searchbar";

export default function Search() {
	return (
		<div>
			<SearchBar />
			<ScrollCard title={"Nearby"} />
			<ScrollCard title={"Cheap"} />
			<ScrollCard title={"Expensive"} />
			<ScrollCard title={"Canteen"} />
			<ScrollCard title={"Samyan"} />
			<div className="pb-[100px]"></div>
			<NavBar />
		</div>
	);
}
