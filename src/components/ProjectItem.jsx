import React from "react";
import placeholder from "../assets/placeholder.png";
import Tag from "./Tag";

const ProjectItem = () => {
    return (
        <div className="flex xl:space-x-12 space-y-8 flex-col xl:flex-row items-center px-2 md:px-0 ">
            <div className="max-w-md lg:max-w-lg xl:max-w-md flex flex-col justify-center order-2 xl:order-none mt-8 xl:mt-0">
                <h1 className="text-2xl font-semibold text-stone-700">Hola</h1>
                <p className="text-[1.05rem] mt-5 font-serif text-stone-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa, blanditiis! Nulla quasi saepe provident quae iure
                    nesciunt quidem perferendis praesentium officiis maxime rem.
                </p>

                <hr className="my-4 xl:my-7" />

                <div className="flex space-x-2">
                    <Tag type="react" />
                    <Tag type="node" />
                    <Tag type="python" />
                    <Tag type="spring" />
                </div>
            </div>

            <div className="aspect-w-2 sm:aspect-w-3 aspect-h-1 w-full order-1 xl:order-none max-w-md lg:max-w-lg xl:max-w-mdxl:max-w-none">
                <img
                    src={placeholder}
                    alt=""
                    className="object-cover rounded"
                />
            </div>
        </div>
    );
};

export default ProjectItem;
