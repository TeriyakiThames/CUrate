"use client";
import useSearchBar from "@/utils/useSearchBar";

export default function SearchBar({ onSearchResults }) {
	const {
		searchTerm,
		setSearchTerm,
		showResults,
		setShowResults,
		results,
		handleInputChange,
		handleSubmission,
		dropdownRef,
		loading,
	} = useSearchBar(onSearchResults);

	return (
		<div className="relative" ref={dropdownRef}>
			<h1 className="font-adlam text-5xl ml-10 pt-12">
				<a
					href="https://www.instagram.com/thames_chiratt/"
					target="none"
					className="text-[#fca136] hover:text-[#de5c8e]"
				>
					CU
				</a>
				rate
			</h1>
			<form
				onSubmit={handleSubmission}
				className="flex justify-between mx-10 m-6 p-3 rounded-4xl bg-[#EAEAEA] text-[#7E7E7E]"
			>
				<input
					className="font-adlam ml-1.5 bg-transparent outline-none w-full"
					type="text"
					placeholder="Search for a restaurant!"
					value={searchTerm}
					onChange={handleInputChange}
					disabled={loading}
				/>
				<button type="submit" className="mr-1.5" disabled={loading}>
					{/* Search Icon */}
					<svg
						width="25"
						height="25"
						viewBox="0 0 64 64"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M43.4933 39.7333L57.8933 54.1066C58.3982 54.6073 58.6821 55.2889 58.6821 55.9999C58.6821 56.711 58.3982 57.3925 57.8933 57.8933C57.3926 58.3981 56.711 58.682 56 58.682C55.289 58.682 54.6074 58.3981 54.1067 57.8933L39.7333 43.4933C36.0066 46.4185 31.4044 48.0058 26.6667 47.9999C14.8846 47.9999 5.33334 38.4487 5.33334 26.6666C5.33334 14.8845 14.8846 5.33325 26.6667 5.33325C38.4488 5.33325 48 14.8845 48 26.6666C48.0059 31.4043 46.4186 36.0065 43.4933 39.7333ZM26.6667 10.6666C17.8301 10.6666 10.6667 17.83 10.6667 26.6666C10.6667 35.5031 17.8301 42.6666 26.6667 42.6666C35.5032 42.6666 42.6667 35.5031 42.6667 26.6666C42.6667 17.83 35.5032 10.6666 26.6667 10.6666Z"
							fill="currentColor"
						/>
					</svg>
				</button>
			</form>

			{/* Results dropdown */}
			{showResults && results.length > 0 && (
				<div className="mx-10 bg-white rounded-2xl shadow-lg border border-gray-200 max-h-64 overflow-y-auto z-10 absolute left-0 right-0 top-[175px]">
					{results.map((restaurant, index) => (
						<a key={index} href={`/restaurant/${restaurant.id}`}>
							<div className="px-4 py-2 hover:bg-[#fca136] hover:text-white cursor-pointer flex items-center">
								<div>
									<div className="font-medium font-adlam">
										{restaurant.name}
									</div>
									{restaurant.tags && (
										<div className="text-xs text-gray-400 font-adlam">
											{restaurant.tags.join(", ")}
										</div>
									)}
								</div>
							</div>
						</a>
					))}
				</div>
			)}

			{showResults && results.length === 0 && searchTerm.trim() !== "" && (
				<div className="mx-10 bg-white p-5 rounded-2xl shadow-lg border border-gray-200 max-h-64 overflow-y-auto z-10 absolute left-0 right-0 top-[175px]">
					No restaurants found matching "{searchTerm}"
				</div>
			)}
		</div>
	);
}
