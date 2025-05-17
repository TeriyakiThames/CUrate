import { useState, useRef, useEffect } from "react";
import useRestaurant from "@/utils/useRestaurant";

export default function useSearchBar(onSearchResults) {
	const [searchTerm, setSearchTerm] = useState("");
	const [showResults, setShowResults] = useState(false);
	const [results, setResults] = useState([]);
	const { restaurantData, loading } = useRestaurant();
	const dropdownRef = useRef(null);

	// Handles clicks outside the dropdown to close it when clicked elsewhere
	useEffect(() => {
		function handleClickOutside(event) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setShowResults(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	// Filters the restaurant data based on the search term for both names and tags
	const searchRestaurants = (term) => {
		if (!term.trim()) return [];
		const normalizedTerm = term.toLowerCase().trim();
		return restaurantData.filter((restaurant) => {
			const nameMatch = restaurant.name?.toLowerCase().includes(normalizedTerm);
			const tagMatch =
				restaurant.tags &&
				restaurant.tags.some((tag) =>
					tag.toLowerCase().includes(normalizedTerm)
				);
			return nameMatch || tagMatch;
		});
	};

	// Handles the change of the search input, filters the results, and toggles dropdown visibility
	const handleInputChange = (e) => {
		const value = e.target.value;
		setSearchTerm(value);

		if (value.trim()) {
			const searchResults = searchRestaurants(value);
			setResults(searchResults);
			setShowResults(true);
		} else {
			setResults([]);
			setShowResults(false);
		}
	};

	// Handles form submission, performs the search, and triggers the callback function if provided
	const handleSubmission = (event) => {
		event.preventDefault();
		if (searchTerm.trim() !== "") {
			const searchResults = searchRestaurants(searchTerm);
			setResults(searchResults);
			setShowResults(true);

			if (onSearchResults && typeof onSearchResults === "function") {
				onSearchResults(searchResults);
			}
		} else {
			alert("Enter a valid search term...");
		}
	};

	return {
		searchTerm,
		setSearchTerm,
		showResults,
		setShowResults,
		results,
		setResults,
		handleInputChange,
		handleSubmission,
		dropdownRef,
		loading,
	};
}
