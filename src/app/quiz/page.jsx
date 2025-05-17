import QuestionNAnswer from "@/components/quiz/question_answer";
import NavBar from "@/components/shared/navbar";

export default function Quiz() {
	return (
		<div>
			<h1 className="font-adlam text-5xl ml-10 pt-12">Quiz!!! 🤓</h1>
			<QuestionNAnswer />
			<NavBar />
		</div>
	);
}
