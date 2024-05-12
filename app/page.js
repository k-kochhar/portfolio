import Image from "next/image";
import { Hero } from "./components/Hero";
import Head from "next/head";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Header } from "./components/Header";


export default function Home() {
    return (
        <>
            <main className="bg-black min-h-screen">
                <Header />
                <Hero />
            </main>
        </>
    );
}
