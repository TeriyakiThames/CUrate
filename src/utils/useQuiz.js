import { useState, useEffect } from "react";

export function useQuiz() {
	const [question, setQuestion] = useState("");
	const [answer, setAnswer] = useState("");
	const [response, setResponse] = useState(null);

	// Fetch the quiz question when the component mounts
	useEffect(() => {
		async function fetchQuestion() {
			try {
				const res = await fetch("/api/quiz");
				if (!res.ok) throw new Error("Failed to fetch question");
				const data = await res.json();
				setQuestion(data.questions);
			} catch (err) {
				console.error("Error fetching question:", err);
			}
		}
		fetchQuestion();
	}, []);

	// Handle form submission and send the answer to the server
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!answer.trim()) {
			alert("Please provide an answer!");
			return;
		}

		try {
			const response = await fetch("/api/quiz", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					questions: question,
					answer: answer,
				}),
			});

			if (response.ok) {
				const data = await response.json();
				setResponse(data);
			} else {
				alert("Error submitting answer!");
			}
		} catch (err) {
			console.error("Error submitting answer:", err);
			alert("Error submitting answer!");
		}
	};

	return { question, answer, setAnswer, handleSubmit, response };
}
