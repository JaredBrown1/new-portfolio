import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Jared Brown",
	description: "Jared Browns Portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="bg-black flex justify-center">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
