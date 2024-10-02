import Image from "next/image";
import {Hero} from "./components/Hero";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {NavBar} from "./components/NavBar";


export default function Home() {
    return (
        <main className="bg-black text-[#acb4b7] min-h-screen">
            <NavBar/>
            <Hero/>
        </main>
    );
}
