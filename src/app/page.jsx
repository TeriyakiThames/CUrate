import NavBar from "@/components/shared/navbar";
import Subtitle from "@/components/home/subtitle";
import Features from "@/components/home/features";
import HomeTitle from "@/components/home/title";

export default function Home() {
	return (
		<>
			<HomeTitle />

			<Subtitle text={"Features"} />
			<Features />

			<Subtitle text={"What is CUrate?"} />
			<p className="font-adlam m-12 mt-0 pb-55 text-gray-500">
				Curate is a web app made for users to find what to eat near Chula. Gone
				are the days of thinking and pondering what you should get. Instead, use
				our Quiz feature to have an AI personally generate the best restaurant
				that fits your answer. Or just use the randomise feature to blindly find
				one without a hassle!
			</p>
			<NavBar />
		</>
	);
}
