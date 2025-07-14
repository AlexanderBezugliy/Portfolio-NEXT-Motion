"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";


// https://drive.google.com/file/d/1QKAfE9qrHC2itx_rk4u_MYr-3zE8UYXn/view?usp=sharing

const HeroContent = () => {
    const resumeDownloadLink = "https://drive.google.com/file/d/1QKAfE9qrHC2itx_rk4u_MYr-3zE8UYXn/view?usp=sharing"; 

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-20 md:mt-40 w-full z-[20]"
        >
            {/* LEFT SIDE */}
            <div 
                className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start pb-10 md:pb-0"
            >
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] self-center md:self-start"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[-13px]">
                        Frontend Developer Portfolio
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-full md:max-w-[600px] w-auto h-auto"
                >
                    <span>
                        Providing
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            the best{" "}
                        </span>
                        project exprience
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-md md:text-lg text-gray-400 my-5 max-w-full md:max-w-[600px] px-2 md:px-0"
                >
                    I&apos;m a Frontend Software Engineer with experience in
                    Website and Software development. Check out my
                    projects and CV. 
                </motion.p>

                <motion.a
                    href={resumeDownloadLink}
                    download="Alexander(frontend-resume).pdf"
                    target="_blank" 
                    rel="noopener noreferrer"

                    variants={slideInFromLeft(1)}
                    className="py-2 px-4 flex items-center font-bold button-primary text-center cursor-pointer rounded-lg max-w-[200px] self-center md:self-start" 
                >  
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Download CV</span>
                    <Image
                        src="/projects/persone.png"
                        alt="logo"
                        width={40}
                        height={40}
                        className="inline-block ml-2 cursor-pointer hover:animate-slowspin"
                    />
                </motion.a>
            </div>

            {/* RIGHT SIDE */}
            <motion.div
                variants={slideInFromRight(0.8)}
                // className="w-full h-full flex justify-center items-center"
                className="w-full h-full flex justify-center items-center mt-10 ml-10 md:ml-4 md:mt-0" 
            >
                <Image
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    height={650}
                    width={650}
                />
            </motion.div>
            
        </motion.div>
    );
};

export default HeroContent;
