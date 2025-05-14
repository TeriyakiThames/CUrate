import restaurants from "@/utils/mockdata";

const cheapRestaurants = restaurants.filter(
	(restaurant) => restaurant.priceRange === "$"
);
const expensiveRestaurants = restaurants.filter(
	(restaurant) => restaurant.priceRange === "$$$"
);
const samyanRestaurants = restaurants.filter(
	(restaurant) => restaurant.location === "Samyan Mitrtown"
);
const chulaRestaurants = restaurants.filter((restaurant) =>
	restaurant.location.includes("Chula")
);
export {
	cheapRestaurants,
	expensiveRestaurants,
	samyanRestaurants,
	chulaRestaurants,
};
