/* eslint-disable @next/next/no-img-element */
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from "next/link";
import Image from 'next/image';


export default function ProjectCard({ data }) {
    return (
            <div className=" border-[#acb4b7] flex flex-col flex-initial bg-[#acb4b7] shadow-2xl max-w-sm  rounded-lg overflow-hidden">
                <img
                    src={data.image}
                    alt="Project Thumbnail"
                    className="w-full h-48 object-cover"
                />
                <div className="bg-[#2c4059] p-4">
                    <h2 className="text-2xl text-white font-bold">{data.title}</h2>
                    {data.notable_info &&
                        <p className="text-gray-300 text-sm font-bold mt-2">{data.notable_info}</p>
                    }
                    <p className="text-gray-300 mt-2">{data.description}</p>
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-[#2c3e50]">Notable Technologies:</h3>
                    <ul className="list-disc list-inside text-[#2c3e50]">
                        {
                            data.technologies.map((technology, index) => {
                                return (
                                    <li key={index}>{technology}</li>
                                )
                            })
                        }
                    </ul>
                    <div className="flex items-end justify-between mt-4">
                        {data.project_link &&
                            <Link href={data.project_link} className="text-[#2c3e50]">
                                <i className="fas fa-external-link-alt"></i> View Project
                            </Link>
                        }
                        {data.repo_link &&
                            <Link href={data.repo_link} className="text-[#2c3e50]">
                                <i className="fab fa-github"></i> View Repository
                            </Link>
                        }

                    </div>
                </div>
            </div>


)
}