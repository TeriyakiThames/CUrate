"use client";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactStars without SSR
const ReactStars = dynamic(() => import("react-stars"), {
	ssr: false,
});

export default function RestaurantHeader({ data }) {
	return (
		<div className="w-full h-[360px] relative mb-5">
			<Image
				src={data.imageUrl}
				alt="Restaurant image"
				fill
				className="object-cover rounded-b-4xl shadow-lg shadow-black/25"
			/>
			<div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/75 to-transparent pointer-events-none rounded-b-4xl" />
			<h1 className="z-50 absolute bottom-14 left-5 font-adlam text-white text-5xl">
				{data.name || "Missing Name"}
			</h1>
			<div className="z-50 absolute bottom-5 left-7 font-adlam text-white text-lg flex gap-5">
				<h1>{data.foodOrigin || "Missing Food Origin"}</h1>
				<h1>|</h1>
				<ReactStars
					count={5}
					edit={false}
					half={true}
					size={20}
					value={data.rating || 0}
					color2={"#ffd700"}
				/>
				<h1>|</h1>
				<ReactStars
					count={3}
					edit={false}
					size={20}
					char={"$"}
					value={data.priceRange || 0}
					color2={"#FFFFFF"}
				/>
			</div>
		</div>
	);
}
