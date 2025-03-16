"use client"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";



export default function ExpCard({ data }) {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className="text-white w-full sm:w-[448px] min-h-[90px] shadow-2xl rounded-lg transition-all p-2 pr-4 duration-300 ease-in-out border border-neutral-800 hover:border-white">
			{/* Static content */}
			<div
				className="flex overflow-hidden cursor-pointer h-[90px]"
				onClick={() => setIsExpanded(!isExpanded)}
			>
				<Image
					src={data.image}
					alt="Project Thumbnail"
					width={96}
					height={60}
					className="object-cover rounded-lg w-32 h-18"
				/>
				<div className="pl-4 p-1 flex-1">
					<h2 className="text-lg text-white font-bold overflow-hidden">{data.title}</h2>
					<h2 className="text-sm sm:text-md line-clamp-2">{data.short}</h2>
				</div>
			</div>

			{/* Expanded content */}
			<div
				className={`transition-all duration-500 ease-in-out overflow-hidden ${
					isExpanded ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"
				}`}
			>
				{isExpanded && (
					<div className="p-4">
						{data.notable_info && (
							<p className="text-sm font-bold">{data.notable_info}</p>
						)}
						<p className="mt-2">{data.description}</p>
						{
							data.technologies && (
								<>
									<h3 className="text-xl font-semibold mt-2">
										Notable Technologies:
									</h3>
									<ul className="list-disc list-inside">
							{data.technologies.map((technology, index) => (
								<li key={index}>{technology}</li>
							))}
									</ul>
								</>
							)
						}
						<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mt-4">
							{data.project_link && (
								<Link href={data.project_link}>
									<i className="fas fa-external-link-alt"></i> View Project
								</Link>
							)}
							{data.repo_link && (
								<Link href={data.repo_link}>
									<i className="fab fa-github"></i> View Repository
								</Link>
							)}
						</div>
					</div>
				)}
			</div>
		</div>
       
    )
}