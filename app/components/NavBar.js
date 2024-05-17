import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from "next/link";
import Image from "next/image";

const navigation = [
    {name: "Home", href: "/"},
    {name: "Projects", href: "/projects"},
    {name: "Experience", href: "/experience"},
];

export function NavBar() {
    return (
        <header className="w-screen h-16 pt-10">
            <div className="flex flex-wrap font-medium sm:gap-x-10 gap-x-3 items-center justify-center text-2xl">
                {navigation.map((item) => {
                    return (
                        <Link key={item.name} href={item.href} passHref>
                                <span key={item.name} className="hover:text-gray-500 cursor-pointer">
                                    {item.name}
                                </span>
                        </Link>
                    )})
                }
            </div>
        </header>
    )
}