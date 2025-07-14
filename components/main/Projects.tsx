import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { productCards } from "@/constants";


const Projects = () => {
    return (
        <div id="projects" className="flex flex-col items-center justify-center pb-10">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-20">
                My Projects
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 w-full max-w-7xl z-[30]">
                {productCards.map((product) => (
                    <ProjectCard
                        key={product.id}
                        src={product.src}
                        title={product.title}
                        description={product.description}
                        link={product.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
