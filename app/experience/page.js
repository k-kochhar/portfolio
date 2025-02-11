import { Hero } from "../components/Hero";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavBar } from "../components/NavBar";
import ExpCard from "./ExpCard";
import Link from "next/link";

const project_data = [
	{
		data: {
			id: 2,
			title: "Cofounder & SoftwareEngineer",
			image: "/engauge.png",
			description:
				"Engauge is a platform designed to enhance student engagement by analyzing lecture interactions and providing summaries of engagement metrics, confusion areas, and more.",
            short: "Engauge",
			contribution:
				"I built a data pipeline for processing student engagement data, implemented NLP models for summarization, and applied clustering algorithms for identifying areas of confusion. I am also working on fine-tuning LLMs and integrating RAG models for more accurate insights.",
			technologies: ["Next.js", "PostgreSQL", "Supabase", "Gemini"],
			project_link: "https://engauge.live",
		},
	},
	{
		data: {
			id: 1,
			title: "Founding Engineer",
			image: "/CTFGuide.png",
			description:
				"CTFGuide is a cybersecurity education startup. It enables independent learning and provides AI " +
				"grading solutions for academia.",
            short: "CTFGuide",
			contribution:
				"I developed and integrated customizable user profiles," +
				" built a comprehensive commenting system, and am currently working on developing" +
				" more social features.",
			technologies: ["Next.js", "Express.js", "PostgreSQL", "Firebase"],
			project_link: "https://ctfguide.com",
			repo_link: "https://github.com/ctfguide-tech",
		},
	},
];

export default function Page() {
	return (
		<main className="bg-black text-[#acb4b7] min-h-screen flex justify-center items-center flex-col">
			<div className="max-w-3xl">
                <div className="h-10"></div>
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
			<h1 className="text-3xl text-white font-semibold pl-4 pb-10">experience</h1>
			<div className="flex flex-col gap-4 px-4">
				{project_data.map((project) => {
                    return <ExpCard key={project.data.id} data={project.data} />;
				})}
			</div>
			<div className={"h-24"} />
                </div>
		</main>
	);
}
