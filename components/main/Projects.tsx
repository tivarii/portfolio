import React from "react";
import ProjectCard from "../sub/ProjectCard";

const projects = [
    {
        src: "/annadaan.png",
        title: "Annadaan | Full-Stack Web Application",
        description:
            "A scalable platform built with React, Node.js, Express, Tailwind CSS, and shadcn UI, enabling 500+ users to share and request surplus food. Designed an intuitive interface, increasing engagement by 30% across devices.",
        demoLink: "https://annadaataaa.vercel.app/",
        githubLink: "https://github.com/tivarii/annadaataa",
    },
    {
        src: "/youtube-transcriptor.png",
        title: "YouTube Transcriptor | AI-Powered Study Notes Generator",
        description:
            "A full-stack AI platform using Next.js, Express.js, LangChain, and Gemini AI to transform YouTube videos into structured study notes, reducing manual note-taking time by up to 90%. Features modular backend and responsive frontend with <1.5s response time.",
        demoLink: "https://youtube-transcriptor-yina.vercel.app/",
        githubLink: "https://github.com/tivarii/EventManager",
    },
    {
        src: "/Emudra.png",
        title: "E-Mudra-Bajar | Real-Time Stock Trading App",
        description:
            "High-performance trading app using Node.js, Next.js, Redis Pub-Sub, and WebSockets for real-time trading. Supports 1,000+ users, 1,000+ TPS, TimescaleDB analytics, 95% test coverage with Vitest, and Singleton Pattern for state consistency.",
        demoLink: "https://www.loom.com/share/695bb8c9731049299e5dd31ceb147448",
        githubLink: "https://github.com/tivarii/E-Mudra-Bajar",
    },
    {
        src: "/bhagwat.png",
        title: "Bhagavad Gita RAG Chatbot | AI Powered Full Stack Project",
        description:
            "A modern RAG (Retrieval-Augmented Generation) application that combines ancient wisdom with cutting-edge AI technology, allowing users to have meaningful conversations with Lord Krishna based on the teachings of the Bhagavad Gita.",
        demoLink: "https://www.loom.com/share/1e27a75ec5db4c4eb9a6f0a8990e25e3?sid=6b3c903b-0c59-4ee3-b984-b89c7d4a951c",
        githubLink: "https://github.com/tivarii/ChatBot_Bhagwat_Gita_RAG",
    },
    {
        src: "/eventM.png",
        title: "EventsM | Event Management Platform",
        description:
            "EventsM is an innovative platform designed to simplify the management of events. Built with a modern tech stack, it enables users to easily publicize events, handle registrations, manage attendance, and more.",
        demoLink: "https://drive.google.com/file/d/17ItsDQQIWVssCG95sKXXzwI0Pp4gRPSr/view?usp=sharing",
        githubLink: "https://github.com/tivarii/EventManager",
    },
];

const Projects: React.FC = () => {
    return (
        <div
            className="projects-container flex flex-col items-center justify-center py-10 px-2"
            id="projects"
        >
            <h1 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                My Projects
            </h1>
            <div
                className="
                    grid
                    gap-8
                    w-full
                    max-w-7xl
                    px-2
                    sm:grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                    auto-rows-fr
                "
                style={{
                    gridAutoRows: "1fr",
                }}
            >
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;