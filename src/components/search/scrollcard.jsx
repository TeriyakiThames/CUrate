import Image from "next/image";

export default function ScrollCard({ title, data }) {
	return (
		<div>
			<h1 className="text-4xl font-adlam mx-5 mt-5">{title}</h1>
			<div
				className="overflow-auto whitespace-nowrap my-5 "
				style={{
					scrollbarWidth: "none",
					msOverflowStyle: "none",
				}}
			>
				{/* Loops through an array and displays the information */}
				{data.map((restaurant, index) => (
					<a
						key={index}
						href={restaurant.path}
						className="inline-block text-center mx-3 "
					>
						<div className="relative w-[150px] h-[200px]">
							<Image
								src={restaurant.imageUrl}
								fill
								sizes="150px"
								alt="Restaurant image"
								className="rounded-3xl object-cover"
								priority
							/>
							{/* Gradient on top of image */}
							<div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none rounded-b-3xl" />
							<h1 className="font-adlam text-white hover:text-[#fca136] whitespace-nowrap overflow-hidden text-ellipsis absolute bottom-2 left-2 right-0 z-1 text-left">
								{restaurant.name}
							</h1>
						</div>
					</a>
				))}
			</div>
		</div>
	);
}
