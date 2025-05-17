import Image from "next/image";
import PageDownArrow from "@/components/home/page_down_arrow";

export default function HomeTitle() {
	return (
		<>
			<div className="relative h-[80vh] flex flex-col items-center justify-center text-center">
				<Image
					className="pointer-events-none pointer-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
					src="/home/cutlery.png"
					width={300}
					height={300}
					alt="Cutlery image background"
				/>
				<h1 className="group font-adlam text-8xl mx-auto z-20">
					<span className="text-[#fca136] group-hover:text-[#de5c8e]">CU</span>
					rate
				</h1>
				<p className="font-adlam text-gray-500 z-10">
					Discover your favourite food near Chula!
				</p>
			</div>
			<PageDownArrow />
		</>
	);
}
