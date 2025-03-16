import Link from "next/link";
import Image from "next/image";

export function Hero() {
	const icons = [
		{ name: "fab fa-github", link: "https://github.com/k-kochhar" },
		{ name: "fab fa-linkedin",link: "https://www.linkedin.com/in/kkochhar04/" },
		{ name: "fas fa-envelope", link: "mailto:kkochhar@terpmail.com" },
	];

	return (
		<div className="h-screen flex items-center justify-center bg-black">
			<div className="flex flex-wrap gap-x-5">
				<div className="lg:block rounded-lg flex mx-auto my-auto">
					<Image
						src="/headshot.jpg"
						alt="Kshitij Kochhar"
						width={270}
						height={270}
						className="rounded-xl w-[98%] sm:w-[270px]"
					/>
				</div>
				<div className="px-8 flex flex-col text-wrap pt-6 sm:pt-0">
					<h1 className="font-extrabold text-4xl sm:text-6xl mb-2 text-white">
						Kshitij Kochhar
					</h1>
					<h2 className="text-xl sm:text-3xl font-semibold mb-2">
						CS @ University of Maryland
					</h2>
                    <h2 className="text-md sm:text-xl font-semi mb-2 text-white">
						7x Hackathon Winner
					</h2>
					<p className="text-sm sm:text-md lg:w-96 sm:w-full mr-auto">
						I&apos;m passionate about leveraging technology to solve real-world
						problems, which I actively explore through hackathons and
						collaborative projects.
					</p>

					<div className="flex justify-between mt-auto flex-wrap text-white pt-4">
						<div>
							<div className="flex gap-x-4 my-auto sm:justify-start">
								<Link href="/projects" passHref>
									<button className=" hover:bg-neutral-700 font-semi px-1 py-1 rounded border border-white">
										Projects
									</button>
								</Link>
								<Link href="/experience" passHref>
									<button className=" hover:bg-neutral-700 font-semi px-1 py-1 rounded border border-white">
										Experience
									</button>
								</Link>
							</div>
						</div>
						<div className="flex gap-x-8 py-auto mt-20 sm:mt-0 w-full sm:w-auto justify-center sm:justify-start">
							{icons.map((icon) => (
								<Link key={icon.name} href={icon.link} passHref>
									<i
										className={`${icon.name} text-3xl hover:text-gray-500 cursor-pointer`}
									></i>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
