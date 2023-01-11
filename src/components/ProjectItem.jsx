import React from "react";
import githubIcon from "../assets/github-icon.png";
import Tag from "./Tag";

const ProjectItem = ({
	title,
	image,
	tags = [],
	backendUrl = "/",
	frontendUrl = "/",
	demoUrl = "/",
}) => {
	return (
		<div className="flex xl:space-x-12 space-y-8 flex-col xl:flex-row items-center px-2 md:px-0 ">
			<div className="max-w-md lg:max-w-lg xl:max-w-md flex flex-col justify-center order-2 xl:order-none mt-8 xl:mt-0">
				<h1 className="text-2xl font-semibold text-stone-700">
					{title}
				</h1>
				<p className="text-[1.05rem] mt-5 font-serif text-stone-600">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Culpa, blanditiis! Nulla quasi saepe provident quae iure
					nesciunt quidem perferendis praesentium officiis maxime rem.
				</p>

				<div className="flex space-x-2 my-4">
					<a
						target="_blank"
						rel="noreferrer"
						href={backendUrl}
						className="select-none rounded py-1 px-2 bg-gray-900 text-white text-sm flex items-center space-x-1"
					>
						<img
							src={githubIcon}
							className="bg-gray-900 w-4"
							alt=""
						/>
						<span>Backend</span>
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href={frontendUrl}
						className="select-none rounded py-1 px-2 bg-gray-900 text-white text-sm flex items-center space-x-1"
					>
						<img
							src={githubIcon}
							className="bg-gray-900 w-4"
							alt=""
						/>
						<span>Frontend</span>
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href={demoUrl}
						className="select-none rounded py-1 px-2 bg-green-500 text-white text-sm flex items-center space-x-1"
					>
						<span>Live Demo</span>
					</a>
				</div>

				<hr className=" mb-4 xl:mb-4" />

				<div className="flex space-x-2">
					{tags.map((tag) => (
						<Tag type={tag} />
					))}
				</div>
			</div>

			{/* <div className="aspect-w-2 sm:aspect-w-3 aspect-h-1 w-full order-1 xl:order-none max-w-md lg:max-w-lg xl:max-w-mdxl:max-w-none"> */}
			<img
				src={image}
				alt=""
				className="object-cover rounded w-[550px]"
			/>
			{/* </div> */}
		</div>
	);
};

export default ProjectItem;
