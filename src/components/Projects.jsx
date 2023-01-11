import React from "react";
import ProjectItem from "./ProjectItem";
import kanbanPreview from "../assets/kanban-preview.gif";
import placeholder from "../assets/placeholder.png";
const Projects = () => {
	return (
		<div className="max-w-5xl mx-auto flex justify-center flex-col mt-16 xl:mt-12 mb-[10rem] xl:mb-[20rem] selection:bg-[#ffc64c]">
			<div className="space-y-20">
				<h1 className="text-3xl xl:text-3xl font-bold text-center xl:text-start text-stone-800 tracking-wider">
					Proyectos
				</h1>
				<ProjectItem
					title="Kanban"
					image={kanbanPreview}
					tags={["angular", "node"]}
					backendUrl="https://github.com/gabrieltd/kanban-backend-ts"
					frontendUrl="https://github.com/gabrieltd/kanban-frontend-angular"
					demoUrl="https://kanban-frontend-angular.vercel.app"
				>
					Aplicación web fullstack de tableros kanban desarrollada
					utilzando Angular, ExpressJS con Typescript y PostgreSQL.
				</ProjectItem>
			</div>
		</div>
	);
};

export default Projects;
