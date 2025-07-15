"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { productCards } from "@/constants";
import { motion } from "framer-motion";
import { card, containerCard } from "@/utils/motion";

const Projects = () => {
    return (
        <div
            id="projects"
            className="flex flex-col items-center justify-center pb-10"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-20">
                My Projects
            </h1>

            <motion.div
                variants={containerCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 w-full max-w-7xl z-[30]"
            >
                {productCards.map((product) => (
                    <motion.div 
                        key={product.id}
                        variants={card}
                    >
                        <ProjectCard
                            key={product.id}
                            src={product.src}
                            title={product.title}
                            description={product.description}
                            link={product.link}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Projects;
