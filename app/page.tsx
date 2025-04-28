import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col items-center my-auto text-foreground gap-8 p-2 sm:gap-16 sm:p-4">
			<div className="flex flex-col items-center gap-2">
				<Image
					className="rounded-full"
					src={"/profile-picture.jpeg"}
					alt="profile picture"
					width={200}
					height={200}
				/>
				<Badge>@KirnaPovilas</Badge>
			</div>

			<div className="flex flex-col items-center gap-4">
				<Link href="https://povilaskirna.com" target="_blank">
					<Button
						className="w-64 px-4 py-2 flex items-center gap-2"
						variant="outline"
					>
						<Image
							src="/homepage.svg"
							alt="Homepage"
							width={20}
							height={20}
						/>
						Official website
					</Button>
				</Link>
				<div className="flex flex-col items-center gap-4 w-64">
					<Link
						href="https://github.com/PovilasKirna"
						target="_blank"
					>
						<Button
							className="w-64 px-4 py-2 flex items-center gap-2"
							variant="outline"
						>
							<Image
								src="/github.svg"
								alt="Github"
								width={20}
								height={20}
							/>
							Github
						</Button>
					</Link>
					<Link
						href="https://www.instagram.com/kirnapovilas/"
						target="_blank"
					>
						<Button
							className="w-64 px-4 py-2 flex items-center gap-2"
							variant="outline"
						>
							<Image
								src="/instagram.svg"
								alt="Instagram"
								width={20}
								height={20}
							/>
							Instagram
						</Button>
					</Link>
					<Link
						href="https://www.youtube.com/channel/UChTGJ-7Sf-Xb4GXnYE7XhIg"
						target="_blank"
					>
						<Button
							className="w-64 px-4 py-2 flex items-center gap-2"
							variant="outline"
						>
							<Image
								src="/youtube.svg"
								alt="YouTube"
								width={20}
								height={20}
							/>
							Youtube
						</Button>
					</Link>
					<Link
						href="https://twitter.com/KirnaPovilas"
						target="_blank"
					>
						<Button
							className="w-64 px-4 py-2 flex items-center gap-2"
							variant="outline"
						>
							<Image
								src="/twitter.svg"
								alt="Twitter"
								width={20}
								height={20}
							/>
							Twitter
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
