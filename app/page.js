import Image from "next/image";
import {Hero} from "./components/Hero";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {NavBar} from "./components/NavBar";


export default function Home() {
    return (
        <main className="bg-gradient-to-t from-[#2c4059] to-[#041a31] text-[#acb4b7] min-h-screen">
            <NavBar/>
            <Hero/>
        </main>
    );
}
