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
        <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col h-full cursor-pointer"
        >
            <div className="relative w-full h-56">
                <Image
                    src={src}
                    alt={title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="object-cover"
                />
            </div>

            <div className="relative p-4 flex-grow">
                <h1 className="text-2xl text-center font-semibold text-white">
                    {title}
                </h1>
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    {description.map((icon, index) => (
                        <div key={index} className="flex-none">
                            <Image
                                src={icon}
                                alt="Technology Icon"
                                width={24}
                                height={24}
                                style={{ objectFit: "contain", height: "auto" }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex justify-center items-center pb-4">
                <span className="text-[20px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    Git Hub
                </span>
                <Image
                    src="/projects/arrow-left(3d).png"
                    alt="arrow-left"
                    width={34}
                    height={34}
                    style={{ objectFit: "contain", height: "auto" }}
                    className="inline-block ml-1"
                />
            </div>
        </Link>
    );
};

export default ProjectCard;
