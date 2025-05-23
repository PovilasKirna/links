import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Povilas Kirna - Links",
	description: "Personal links of Povilas Kirna",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head />
			<body className="relative min-h-screen">
				<Image
					className="absolute top-0 left-0 w-full h-full object-cover -z-10"
					src={"/wallpaper.jpg"}
					alt="Background"
					fill
					priority
				/>

				<div
					className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased text-foreground flex flex-col min-h-screen`}
				>
					{children}
				</div>
			</body>
		</html>
	);
}
