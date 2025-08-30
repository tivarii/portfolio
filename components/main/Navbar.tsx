"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full fixed top-0 z-50 bg-[#03001417] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 px-4 py-2">
            <div className="flex items-center justify-between h-[56px]">
                {/* Logo */}
                <a href="#about-me" className="flex items-center">
                    <Image
                        src="/NavLogo.png"
                        alt="logo"
                        width={40}
                        height={40}
                        className="cursor-pointer hover:animate-slowspin"
                    />
                    <span className="font-bold ml-2 text-gray-300 hidden sm:block text-base">
                        Full Stack Dev
                    </span>
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    className="text-gray-200 sm:hidden"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={
                                isMenuOpen
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16M4 18h16"
                            }
                        />
                    </svg>
                </button>

                {/* Desktop Menu */}
                <div className="hidden sm:flex items-center gap-8">
                    <a href="#about-me" className="cursor-pointer text-gray-200 hover:text-[#7042f8] transition">
                        About me
                    </a>
                    <a href="#skills" className="cursor-pointer text-gray-200 hover:text-[#7042f8] transition">
                        Skills
                    </a>
                    <a href="#projects" className="cursor-pointer text-gray-200 hover:text-[#7042f8] transition">
                        Projects
                    </a>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-3 ml-4">
                    {Socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <Image
                                src={social.src}
                                alt={social.name}
                                width={26}
                                height={26}
                                className="cursor-pointer sm:w-[30px] sm:h-[30px]"
                            />
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="sm:hidden flex flex-col bg-[#030014ee] text-gray-200 py-3 px-4 rounded-lg shadow-md mt-2 animate-fade-in absolute left-4 right-4 top-[60px]">
                    <a
                        href="#about-me"
                        className="py-2 cursor-pointer hover:text-[#7042f8] transition"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About me
                    </a>
                    <a
                        href="#skills"
                        className="py-2 cursor-pointer hover:text-[#7042f8] transition"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Skills
                    </a>
                    <a
                        href="#projects"
                        className="py-2 cursor-pointer hover:text-[#7042f8] transition"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Projects
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;