import { NextResponse } from "next/server";

// Fetch a quiz question from the external server
async function getQuizQuestion() {
	try {
		const response = await fetch("https://curate-server-mauve.vercel.app/ai");
		if (!response.ok) {
			throw new Error("Failed to fetch quiz question");
		}
		const data = await response.json();
		return {
			questions: data.questions,
		};
	} catch (error) {
		console.error("Error fetching quiz question:", error);
		throw error;
	}
}

// Send user's answer to the external server
async function saveAnswer(question, answer) {
	try {
		const response = await fetch("https://curate-server-mauve.vercel.app/ai", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				questions: question,
				answer,
			}),
		});

		if (!response.ok) {
			throw new Error("Failed to send answer");
		}

		const result = await response.json();
		return result;
	} catch (error) {
		console.error("Error sending answer:", error);
		throw error;
	}
}

// Handle GET request to retrieve a quiz question
export async function GET() {
	try {
		const question = await getQuizQuestion();
		return NextResponse.json(question);
	} catch (err) {
		return NextResponse.json(
			{ error: "Failed to fetch question" },
			{ status: 500 }
		);
	}
}

// Handle POST request to submit an answer
export async function POST(request) {
	try {
		const body = await request.json();

		const { questions, answer } = body;

		if (!questions || !answer) {
			console.warn("Missing fields:", { id, questions, answer });
			return NextResponse.json(
				{ error: "Missing id, questions, or answer" },
				{ status: 400 }
			);
		}

		const result = await saveAnswer(questions, answer);
		return NextResponse.json(result);
	} catch (err) {
		console.error("Error submitting answer:", err);
		return NextResponse.json(
			{ error: "Failed to submit answer" },
			{ status: 500 }
		);
	}
}
