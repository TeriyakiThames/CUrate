export default function RestaurantPhone({ data }) {
	return (
		<>
			<h1 className="font-adlam ml-5 mb-2 text-2xl">
				Phone Number:{" "}
				<span className="font-adlam mb-2 text-xl text-[#707070]">
					{data.phone}
				</span>
			</h1>
		</>
	);
}
