export default function RestaurantTags({ data }) {
	return (
		<>
			<h1 className="font-adlam ml-5 mb-2 text-2xl flex">Tags:</h1>
			<ul
				style={{
					scrollbarWidth: "none",
					msOverflowStyle: "none",
				}}
				className="mx-10 my-2 flex gap-2.5 text-sm bottom-5 overflow-x-auto whitespace-nowrap scrollbar-hide"
			>
				{data.tags.map((tag, index) => (
					<li
						key={index}
						className="px-2 py-0.5 bg-[#fca136] rounded-xl  shrink-0"
					>
						{tag}
					</li>
				))}
			</ul>
		</>
	);
}
