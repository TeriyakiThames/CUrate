export default function Subtitle({ text }) {
	return (
		<div id="features" className="mx-10 my-5 font-adlam">
			<h1 className="flex items-center justify-center text-2xl font-bold text-black">
				<span className="mr-4 flex-grow border-t border-2 border-black"></span>
				{text}
				<span className="ml-4 flex-grow border-t border-2 border-black"></span>
			</h1>
		</div>
	);
}
