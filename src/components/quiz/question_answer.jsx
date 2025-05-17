"use client";
import { useState } from "react";

export default function QuestionNAnswer() {
	// TODO: Send GET request to get the quiz questions here
	const QuizQuestion = {
		id: 28,
		questions: "Do you chase closure or chaos?",
	};

	const [answer, setAnswer] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		// TODO: Send POST request with answer and question here
		alert(`Question: ${QuizQuestion.questions}\nAnswer: ${answer}`);
	}

	return (
		<>
			<div className="m-5 my-28 rounded-2xl p-4 font-adlam text-black text-center bg-white/75">
				<p className="text-left text-2xl">Question:</p>
				<p className=" text-5xl">{QuizQuestion.questions}</p>
			</div>

			<form className="m-5" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Type your answer here ..."
					value={answer}
					onChange={(e) => setAnswer(e.target.value)}
					className="bg-[#D9D9D9]/50 rounded-2xl p-4 font-adlam text-[#6c6c6c] text-center w-full mb-4 placeholder-[#6c6c6c]"
				/>
				<button
					type="submit"
					className="mt-[10px] bg-[#D9D9D9] hover:bg-[#fca136] rounded-2xl p-4 font-adlam text-[#6c6c6c] text-center w-full"
				>
					Submit
				</button>
			</form>
		</>
	);
}
