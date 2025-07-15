"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";


const mobileMenuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: "0%", opacity: 1 },
    transition: {
        duration: 0.3, 
        ease: "easeOut",
    },
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                {/* LOGO */}
                <a
                    href="#about-me"
                    className="h-auto w-auto flex flex-row items-center"
                >
                    <Image
                        src="/NavLogo.png"
                        alt="logo"
                        width={70}
                        height={70}
                        className="cursor-pointer hover:animate-slowspin"
                    />

                    <span className="font-bold ml-[10px] hidden lg:block text-gray-300">
                        Frontend Dev
                    </span>
                </a>

                {/* NAVIGATION Side Bar */}
                <div className="w-[500px] h-full hidden sm:flex flex-row items-center justify-between md:mr-20">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        <a
                            href="#about-me"
                            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 cursor-pointer"
                        >
                            About me
                        </a>
                        <a
                            href="#skills"
                            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 cursor-pointer"
                        >
                            Skills
                        </a>
                        <a
                            href="#projects"
                            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 cursor-pointer"
                        >
                            Projects
                        </a>
                    </div>
                </div>

                {/* SOCIAL */}
                <div className="flex-row gap-5 hidden lg:flex">
                    {Socials.map((social) => (
                        <Link
                            key={social.name}
                            href={social.link}
                            target="_blank"
                        >
                            <Image
                                src={social.src}
                                alt={social.name}
                                width={28}
                                height={28}
                            />
                        </Link>
                    ))}
                </div>

                {/* BURGER MOBILE */}
                <div
                    className="sm:hidden text-gray-200 text-3xl cursor-pointer z-50"
                    onClick={toggleMenu}
                >
                    {isOpen 
                        ? <HiOutlineX className="text-blue-600 w-[40px] h-[40px]" /> 
                        : <HiOutlineMenuAlt3 className="text-blue-600 w-[40px] h-[40px]" />}
                </div>
            </div>

            {/* MOBILE - MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={mobileMenuVariants} 
                        initial="hidden"            
                        animate="visible"            
                        exit="hidden"

                        ref={menuRef}
                        className="fixed top-[65px] left-0 w-full h-auto p-5 md:hidden 
                                    flex flex-col items-center gap-5 border-b border-[#7042f861]
                                    bg-gradient-to-b from-[#030014cc] to-[#0f0f2dcc] backdrop-blur-3xl"
                        // className="fixed top-[65px] left-0 w-full h-auto bg-[#030014] p-5 md:hidden 
                        //             flex flex-col items-center gap-5 border-b border-[#7042f861]"
                    >
                        <a
                            onClick={toggleMenu}
                            href="#about-me"
                            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 cursor-pointer text-lg py-2"
                        >
                            About me
                        </a>
                        <a
                            onClick={toggleMenu}
                            href="#skills"
                            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 cursor-pointer text-lg py-2"
                        >
                            Skills
                        </a>
                        <a
                            onClick={toggleMenu}
                            href="#projects"
                            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 cursor-pointer text-lg py-2"
                        >
                            Projects
                        </a>
                        {/* social ICONS for mobile-menu */}
                        <div className="flex flex-row gap-5 mt-4">
                            {Socials.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={social.src}
                                        alt={social.name}
                                        width={24}
                                        height={24}
                                    />
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
