// src/app/api/search/route.js
export async function GET() {
	try {
		const response = await fetch(
			"https://curate-server-mauve.vercel.app/restaurant",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (!response.ok) {
			return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
				status: response.status,
			});
		}

		const data = await response.json();

		return new Response(JSON.stringify(data), {
			status: 200,
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: "Internal Server Error" }), {
			status: 500,
		});
	}
}
