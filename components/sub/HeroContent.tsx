"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  const handleSumbit = () => {
    window.open(
      "https://drive.google.com/file/d/1jISphSwRusYNYtfOLFTEzp6ipPTZUWoL/view",
      "_blank"
    );
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-20 mt-16 md:mt-40 w-full z-[20]"
    >
      <div className="w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box flex items-center py-2 px-3 border border-[#7042f88b] opacity-90 mb-2 md:mb-0"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
          <h1 className="text-xl md:text-2xl text-white">
            Adarsh Tiwari !!
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-4 md:mt-6 text-3xl md:text-6xl font-bold text-white max-w-full md:max-w-[600px] w-auto h-auto"
        >
          <span>
            Empowering
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Web Through{" "}
            </span>
            Modern Tech !!
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-4 md:my-5 max-w-full md:max-w-[600px]"
        >
          MERN Stack Developer with hands-on experience in building dynamic and responsive web applications. Skilled in integrating APIs and optimizing performance for seamless user experiences.
        </motion.p>
        <motion.button
          onClick={handleSumbit}
          variants={slideInFromLeft(1)}
          className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-full md:max-w-[200px] w-full md:w-auto"
        >
          View Resume
        </motion.button>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center items-center mb-8 md:mb-0"
      >
        <div className="relative w-48 h-48 md:w-[350px] md:h-[350px] lg:w-[650px] lg:h-[650px]">
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;