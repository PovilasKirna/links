import React from "react";
import { ModeToggle } from "./theme-toggle";
import Image from "next/image";

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center p-4 bg-background text-foreground shadow-md">
			<Image src={"/logo.png"} alt="Logo" width={50} height={50} />
			<div className="text-lg font-bold">My Links</div>
			<ModeToggle />
		</nav>
	);
}
