"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";


interface Props {
    src: string;
    title: string;
    description: string[];
    link: string;
}
const ProjectCard = ({ src, title, description, link }: Props) => {
    return (
        <div
            className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col h-full"
        >
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className="w-full object-cover h-56"
            />

            <div className="relative p-4 flex-grow">
                <h1 className="text-2xl text-center font-semibold text-white">{title}</h1>
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    {description.map((icon, index) => (
                        <Image
                            key={index}
                            src={icon}
                            alt="Technology Icon"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    ))}
                </div>
            </div>

            <div className="relative flex justify-center items-center pb-4">
                <Link
                    href={link}
                    target="_blank"
                    className="text-[20px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 cursor-pointer"
                    rel="noopener noreferrer"
                >
                    Git Hub
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
