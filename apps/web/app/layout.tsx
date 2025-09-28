import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Pokemon List",
	description: "Es la prueba de la API de Pokémon.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
