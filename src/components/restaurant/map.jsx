export default function RestaurantMap({ data }) {
	return (
		<>
			{data.address && (
				<>
					<h1 className="font-adlam ml-5 mb-2 text-2xl">Map</h1>
					<div className="flex justify-center pb-[125px]">
						<iframe
							src={data.address}
							width="85%"
							height="400"
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="rounded-2xl mb-5 shadow-lg shadow-black/25"
						/>
					</div>
				</>
			)}
		</>
	);
}
