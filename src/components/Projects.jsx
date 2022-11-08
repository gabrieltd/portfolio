import React from "react";
import ProjectItem from "./ProjectItem";
import SearchBar from "./SearchBar";

const Projects = () => {
    return (
        <div className="max-w-5xl mx-auto flex justify-center flex-col mt-16 xl:mt-12">
            <div className="space-y-20">
                <h1 className="text-3xl xl:text-3xl font-bold text-center xl:text-start text-stone-800 tracking-wider">
                    Proyectos
                </h1>
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </div>
        </div>
    );
};

export default Projects;
