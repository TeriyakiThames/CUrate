"use client";
import { useQuiz } from "@/utils/useQuiz.js"; // import the custom hook

export default function QuestionNAnswer() {
	const { question, answer, setAnswer, handleSubmit, response } = useQuiz();

	return (
		<>
			{/* Show question and input form if no response is present */}
			{!response && (
				<>
					<div className="m-5 my-28 rounded-2xl p-4 font-adlam text-black text-center bg-white/75">
						<p className="text-left text-2xl mb-5">Question:</p>
						<p className="text-4xl">{question || "Loading question..."}</p>
					</div>

					<form className="m-5 mb-0" onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Type your answer here ..."
							value={answer}
							onChange={(e) => setAnswer(e.target.value)}
							className="bg-[#D9D9D9]/50 rounded-2xl p-4 font-adlam text-[#6c6c6c] text-center w-full mb-4 placeholder-[#6c6c6c]"
						/>
						<button
							type="submit"
							className="mt-[10px] bg-[#D9D9D9] hover:bg-[#fca136] hover:text-white rounded-2xl p-4 font-adlam text-[#6c6c6c] text-center w-full"
						>
							Submit
						</button>
					</form>
					<button
						onClick={() => window.location.reload()}
						className="text-xs hover:text-[#fca136] rounded-2xl font-adlam text-[#D9D9D9] text-center w-full"
					>
						New Question Please!
					</button>
				</>
			)}

			{/* If there is a response, display the explanation and id */}
			{response && (
				<div className="m-5 my-28 rounded-2xl p-4 font-adlam text-black text-center">
					<div className="bg-white/75">
						<h1 className="text-left text-2xl">Explanation:</h1>
						<p className="my-5 mb-[125px]">
							{response.explanation || "Loading explanation..."}
						</p>
					</div>

					<a
						href={`/restaurant/${response.id}`}
						className="mt-[10px] hover:bg-[#D9D9D9] bg-[#fca136] text-white hover:text-[#6c6c6c] rounded-2xl p-4 font-adlam text-center w-full"
					>
						Check out the restaurant!
					</a>
					<button
						onClick={() => window.location.reload()}
						className="mt-5 text-xs hover:text-[#fca136] rounded-2xl font-adlam text-[#D9D9D9] text-center w-full"
					>
						Try Again!
					</button>
				</div>
			)}
		</>
	);
}
