"use client";
import { Hero } from "../components/Hero";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProjectCard from "./ProjectCard";
import { NavBar } from "../components/NavBar";
import Link from "next/link"; // {{ edit_1 }}
import { useState } from "react"; // {{ edit_2 }}

const project_data = [
	{
		data: {
			id: 9,
			title: "Sera",
			image: "/Sera.png",
			notable_info: ["Winner of PennApps 2024's Best DEI Hack"],
			description:
				"An AI-powered finance app with personalized financial guidance, OCR receipt scanning, transaction management, and budgeting tools.",
			short: "AI financial manager",
			technologies: ["Tune AI", "Roboflow OCR", "Cerebras AI"],
			project_link: "https://devpost.com/software/sera-2svk5u",
			repo_link: "https://github.com/sera-financial",
		},
	},
	{
		data: {
			id: 8,
			title: "MedTap",
			image: "/MedTap.png",
			notable_info: ["Winner of HopHacks 2024's Patient Safety Track"],
			description:
				"MedTap provides instant access to critical medical data through NFC technology," +
                "allowing first responders to quickly retrieve essential patient information in " +
                "emergencies. This ensures timely and informed decision-making, improving patient " +
                " safety and care outcomes.",
			short: "NFC-based emergency medical data access",
			technologies: ["Next", "MongoDB", "Auth0"],
			project_link: "https://devpost.com/software/medtap",
			repo_link: "https://github.com/Med-Tap",
		},
	},
	{
		data: {
			id: 7,
			title: "Travel Tracker",
			image: "/TravelTracker_Logo.png",
			description:
				"Real-time location mapping app that " +
				"tracks mentions of specific phrases on Reddit. Uses NLP to extract locations " +
				"and geocoding APIs for mapping, and Socket.io for live updates.",
			short: "Travel mention tracker",
			technologies: ["Flask", "Socket.io", "OpenCage Geocoder"],
			project_link: "",
			repo_link: "https://github.com/k-kochhar/Travel-Tracker",
		},
	},
	{
		data: {
			id: 6,
			title: "CollabDoc",
			image: "/CollabDoc.png",
			notable_info: ["Work in progress"],
			description:
				"Real-time collaborative document editing web app that uses a simple 4-digit code " +
				"for easy access and sharing.",
			short: "Collaborative document editing",
			technologies: ["Typescript", "Supabase", "Angular"],
			project_link: "",
			repo_link: "https://github.com/k-kochhar/CollabDoc",
		},
	},
	{
		data: {
			id: 5,
			title: "Nuke Nester",
			image: "/NukeNester2.png",
			notable_info: ["Winner of Bitcamp 2024's Best Sustainability Hack"],
			description:
				"App that allows companies to manage their nuclear waste disposal in a safe and sustainable manner.",
			short: "Nuclear waste management app",
			technologies: ["Next", "MongoDB", "Express"],
			project_link: "https://devpost.com/software/nuke-nester",
			repo_link: "https://github.com/NukeNester",
		},
	},
	// {
	//     data: {
	//         id: 4,
	//         title: "UMoment",
	//         image: "/UMoment.jpeg",
	//         description: "Event directory app that serves as a centralized hub for university students to discover and " +
	//             "keep track of what is going on and around campus.",
	//         short: "AI Finance app",
	//         technologies: ["Next", "Auth0", "GPT-3"],
	//         project_link: "https://devpost.com/software/umoment",
	//         repo_link: "https://github.com/umoment-tech"
	//     }
	// },
	// {
	//     data: {
	//         id: 3,
	//         title: "Workbook",
	//         image: "/workbook.png",
	//         description: "Terminal system that allows for professors to write markdown/HTML and have a linux container " +
	//             "on the side for students to execute the code.",
	//         short: "AI Finance app",
	//         technologies: ["Google Kubernetes Engine", "React", "TailwindCSS"],
	//         project_link: "https://devpost.com/software/nimpfy",
	//         repo_link: "https://github.com/Laphatize/workbook"
	//     }
	// },
	// {
	//     data: {
	//         id: 2,
	//         title: "Weather SMS",
	//         image: "/Cloud.jpeg",
	//         description: "App that sends weather data to a user's phone via SMS. AWS Lambda " +
	//             "sends the data and AWS Cloudwatch triggers the Lambda function.",
	//         short: "AI Finance app",
	//         technologies: ["AWS Cloudwatch", "AWS Lambda", "SMTP"],
	//         repo_link: "https://github.com/k-kochhar/Weather-SMS"
	//     }
	// },
	// {
	//     data: {
	//         id: 1,
	//         title: "Amazon Web Scraper",
	//         image: "/Amazon_Logo.webp",
	//         description: "Basic web scraping tool using Beautiful Soup to extract and display product information from Amazon",
	//         short: "AI Finance app",
	//         technologies: ["Python", "Beautiful Soup library"],
	//         repo_link: "https://github.com/k-kochhar/Amazon-Products-Info"
	//     }
	// },
];

export default function Page() {
	const [dropdown, setDropdown] = useState(false); // {{ edit_3 }}

	return (
		<main className="bg-black text-[#acb4b7] min-h-screen flex justify-center items-center flex-col">
			<div className="max-w-3xl">
				<div className="h-24"></div>
				<div className="flex justify-center gap-2 mb-10">
					<Link href="/" passHref>
						<button className="hover:bg-neutral-700 font-semi py-0.5 px-1 rounded">
							home
						</button>
					</Link>
					<p className="py-0.5"> / </p>
					<Link href="/projects" passHref>
						<button className="hover:bg-neutral-700 font-semi py-0.5 px-1 rounded">
							projects
						</button>
					</Link>
					<p className="py-0.5"> / </p>

					<Link href="/experience" passHref>
						<button className="hover:bg-neutral-700 font-semi py-0.5 px-1 rounded">
							experience
						</button>
					</Link>
				</div>
				<h1 className="text-3xl text-white font-semibold pl-4 pb-10">projects</h1>
				<div className="flex flex-col gap-4 px-4">
					{project_data.map((project) => {
						return <ProjectCard key={project.data.id} data={project.data} />;
					})}
				</div>
				<div className={"h-24"} />
			</div>
		</main>
	);
}
