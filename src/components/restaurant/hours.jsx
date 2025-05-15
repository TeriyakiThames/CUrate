export default function RestaurantHours({ data }) {
	return (
		<>
			<h1 className="font-adlam ml-5 mb-2 text-2xl">
				Opening Hours:{" "}
				<span className="font-adlam mb-2 text-xl text-[#707070]">
					{data.hours || "Missing Opening Hours"}
				</span>
			</h1>
		</>
	);
}
