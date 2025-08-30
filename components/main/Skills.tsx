'use client'

import {
    Backend_skill,
    Full_stack,
    Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 min-h-screen relative overflow-hidden pb-20 pt-10 px-4"
            style={{ transform: "scale(1)" }}
        >
            <SkillText />

            <div className="flex flex-wrap justify-center gap-4 w-full max-w-4xl mx-auto mt-4">
                {Skill_data.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 w-full max-w-4xl mx-auto mt-4">
                {Backend_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 w-full max-w-4xl mx-auto mt-4">
                {Full_stack.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>

            <div className="w-full h-full absolute top-0 left-0 pointer-events-none">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    />
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 640px) {
                    section {
                        padding-left: 0.5rem;
                        padding-right: 0.5rem;
                        padding-top: 2rem;
                        padding-bottom: 2rem;
                    }
                    .max-w-4xl {
                        max-width: 100%;
                    }
                    .gap-4 {
                        gap: 0.75rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Skills;
