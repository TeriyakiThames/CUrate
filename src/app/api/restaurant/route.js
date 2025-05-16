export async function GET(req) {
	const { searchParams } = new URL(req.url);
	const id = searchParams.get("id");

	try {
		const response = await fetch(
			`https://curate-server-mauve.vercel.app/restaurant?id=${id}`
		);

		if (!response.ok) {
			return new Response(JSON.stringify({ error: "Upstream fetch failed" }), {
				status: response.status,
			});
		}

		const data = await response.json();
		return new Response(JSON.stringify(data), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (err) {
		return new Response(JSON.stringify({ error: "Proxy error" }), {
			status: 500,
		});
	}
}
