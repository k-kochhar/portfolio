import Link from 'next/link'

export function Hero() {

    const icons = [
        {name: 'fab fa-github', link: 'https://github.com/k-kochhar'},
        {name: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/kkochhar04/'},
        {name: 'fas fa-envelope', link: 'mailto:kkochhar@terpmail.com'},
        {name: 'fab fa-instagram', link: 'https://www.instagram.com/ks.hitij/'},
    ]

    return (

        <div className="h-screen -mt-16 pb-25 py-2 flex flex-wrap-reverse items-center justify-center">
            <div className=" ">
                <div className="py-10 px-4">
                    <h1 className="font-bold text-6xl sm:text-8xl">
                        Kshitij Kochhar
                    </h1>
                    <h1 className="mt-2 text-2xl">
                        Computer Science at University of Maryland
                    </h1>
                    <h1 className="text-lg">
                        4x Hackathon Winner
                    </h1>
                    <div className="flex gap-x-10 py-4">
                        {
                            icons.map((icon) => {
                                return (
                                    <Link key={icon.name} href={icon.link} passHref>
                                        <i className={`${icon.name} text-4xl  hover:text-gray-500 cursor-pointer`}></i>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <h2 className="text-md justify-center my-2 max-w-4xl">
                    Junior at UMD studying CS. I&apos;m passionate 
                    about leveraging technology to 
                    solve real-world problems, which I actively explore through 
                    hackathons and collaborative projects
                    </h2>
                </div>

            </div>

            <div className="hidden lg:block py-10">
                <img src="../headshot.jpg" alt="Kshitij Kochhar" className="w-96 h-96 rounded-full"/>
            </div>
        </div>

    )
}