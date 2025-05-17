import Link from "next/link";

export default function PageDownArrow() {
	return (
		<div className="mb-40 animated-up-down z-30">
			<Link
				href="/#features"
				className="text-black hover:text-[#fca136] flex flex-col items-center justify-center"
			>
				<h1 className="font-adlam">Scroll Down</h1>
				<svg className="h-auto w-10" viewBox="0 0 100 60">
					<path
						d="M20 10 L50 40 L80 10"
						stroke="currentColor"
						strokeWidth="5"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
					<path
						d="M20 30 L50 60 L80 30"
						stroke="currentColor"
						strokeWidth="5"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
				</svg>
			</Link>
		</div>
	);
}
