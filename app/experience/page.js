import {Hero} from "../components/Hero";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {NavBar} from "../components/NavBar";
import ExpCard from "./ExpCard";

const project_data = [
    {
        data: {
            id: 1,
            title: "CTFGuide",
            notable_info: ["Founding Software Engineer"],
            image: "../../CTFGuide.png",
            description: "CTFGuide is a cybersecurity education startup. It enables independent learning and provides AI " +
                "grading solutions for academia.",
            contribution: "I developed and integrated customizable user profiles," +
                " built a comprehensive commenting system, and am currently working on developing" +
                " more social features.",
            technologies: ["Next.js", "Express.js", "PostgreSQL", "Firebase"],
            project_link: "https://ctfguide.com",
            repo_link: "https://github.com/ctfguide-tech"
        }
    },
    {
        data: {
            id: 2,
            title: "Sork",
            notable_info: ["Founder"],
            image: "../../Sork_Logo.png",
            description: "Sork is a platform that is being developed for startups to manage their team, projects, and tasks. " +
                "It is designed to be a one-stop solution for all startup needs.",
            contribution: "I helped develop the entire platform from scratch, including the frontend, backend, and  " +
                "real-time conferencing feature.",
            technologies: ["Next.js", "Supabase", "MongoDB", "WebRTC"],
            project_link: "https://sork.app",
            repo_link: "https://github.com/Sork-app"
        }
    }
]

export default function Page() {
    return (
        <main className="bg-gradient-to-t from-[#2c4059] to-[#041a31] text-[#acb4b7] min-h-screen">
            <NavBar/>
            <div className="h-24 pt-12  flex flex-wrap font-bold sm:gap-x-10 gap-x-3 items-center justify-center text-5xl">
                <span>
                    Experience
                </span>
            </div>
            <div className="flex flex-wrap justify-center pt-10 gap-10 px-10">
                {project_data.map((project) => {
                    return (
                        <ExpCard key={project.data.id} data={project.data}/>
                    )
                })}

            </div>
            <div className={"h-24"}/>
        </main>
    );
}