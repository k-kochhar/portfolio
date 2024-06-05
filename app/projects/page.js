import {Hero} from "../components/Hero";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProjectCard from "./ProjectCard";
import {NavBar} from "../components/NavBar";

const project_data = [
    {
        data: {
            id: 6,
            title: "CollabDoc",
            image: "../../CollabDoc.png",
            notable_info: ["Work in progress"],
            description: "Real-time collaborative document editing web app that uses a simple 4-digit code " +
                "for easy access and sharing.",
            technologies: ["Typescript", "Supabase", "Angular"],
            project_link: "",
            repo_link: "https://github.com/k-kochhar/CollabDoc"
        }
    },
    {
        data: {
            id: 5,
            title: "Nuke Nester",
            image: "../../NukeNester2.png",
            notable_info: ["Winner of Bitcamp 2024's Best Sustainability Hack"],
            description: "App that allows companies to manage their nuclear waste disposal in a safe and sustainable manner.",
            technologies: ["Next", "MongoDB", "Express"],
            project_link: "https://devpost.com/software/nuke-nester",
            repo_link: "https://github.com/NukeNester"
        }
    },
    {
        data: {
            id: 4,
            title: "UMoment",
            image: "../../UMoment.jpeg",
            description: "Event directory app that serves as a centralized hub for university students to discover and " +
                "keep track of what is going on and around campus.",
            technologies: ["Next.js", "Auth0", "GPT-3"],
            project_link: "https://devpost.com/software/umoment",
            repo_link: "https://github.com/umoment-tech"
        }
    },
    {
        data: {
            id: 3,
            title: "Workbook",
            image: "../../workbook.png",
            description: "Terminal system that allows for professors to write markdown/HTML and have a linux container " +
                "on the side for students to execute the code.",
            technologies: ["Google Kubernetes Engine", "React", "TailwindCSS"],
            project_link: "https://devpost.com/software/nimpfy",
            repo_link: "https://github.com/Laphatize/workbook"
        }
    },
    {
        data: {
            id: 2,
            title: "Weather SMS",
            image: "../../Cloud.jpeg",
            description: "App that sends weather data to a user's phone via SMS. AWS Lambda " +
                "sends the data and AWS Cloudwatch triggers the Lambda function.",
            technologies: ["AWS Cloudwatch", "AWS Lambda", "SMTP"],
            repo_link: "https://github.com/k-kochhar/Weather-SMS"
        }
    },
    {
        data: {
            id: 1,
            title: "Amazon Web Scraper",
            image: "../../Amazon_Logo.webp",
            description: "Basic web scraping tool using Beautiful Soup to extract and display product information from Amazon",
            technologies: ["Python", "Beautiful Soup library"],
            repo_link: "https://github.com/k-kochhar/Amazon-Products-Info"
        }
    },
    ]

export default function Page() {
    return (
        <main className="bg-gradient-to-t from-[#2c4059] to-[#041a31] text-[#acb4b7] min-h-screen">
            <NavBar/>
            <div className="h-24 pt-12  flex flex-wrap font-bold sm:gap-x-10 gap-x-3 items-center justify-center text-5xl">
                <span>
                    Projects
                </span>
            </div>
            <div className="flex flex-wrap justify-center pt-10 gap-10 px-10">
                {project_data.map((project) => {
                    return (
                        <ProjectCard
                            key={project.data.id}
                            data={project.data}
                        />
                    )
                })
                }

            </div>
            <div className={"h-24"}/>
        </main>
    );
}