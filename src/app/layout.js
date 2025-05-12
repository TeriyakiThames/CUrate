import "../styles/globals.css";

export const metadata = {
	title: "CUrate",
	description: "Discover your favourite food near Chula!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<main className="mobile">{children}</main>
			</body>
		</html>
	);
}
