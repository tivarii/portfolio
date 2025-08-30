import React from "react";
import Image from "next/image";

interface ProjectCardProps {
    src: string;
    title: string;
    description: string;
    demoLink: string;    // Demo link prop
    githubLink: string;  // GitHub link prop
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    src,
    title,
    description,
    demoLink,
    githubLink,
}) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className="w-full object-contain pointer-events-none"
            />
            <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-300">{description}</p>
                <div className="mt-4 flex gap-3">
                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        Live Demo
                    </a>
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;