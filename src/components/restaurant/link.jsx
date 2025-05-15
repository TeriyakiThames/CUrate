export default function RestaurantLink({ data }) {
	return (
		<>
			{data.link && (
				<h1 className="font-adlam ml-5 mb-2 text-2xl ">
					External Link:{" "}
					<a
						href={data.link}
						target="_blank"
						rel="noopener noreferrer"
						className="text-[#fca136] hover:text-[#707070] font-adlam mb-2 text-xl"
					>
						Click here!
					</a>
				</h1>
			)}
		</>
	);
}
