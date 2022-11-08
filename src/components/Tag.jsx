import React from "react";
import nodeLogo from "../assets/node-logo.png";
import springLogo from "../assets/spring-logo.png";
import reactLogo from "../assets/react-logo.png";
import pythonLogo from "../assets/python-logo.png";

const Tag = ({ type }) => {
    const tagSettings = [
        {
            name: "Node",
            img: nodeLogo,
            bgColor: "bg-lime-800",
        },
        {
            name: "React",
            img: reactLogo,
            bgColor: "bg-gray-700",
        },
        {
            name: "Python",
            img: pythonLogo,
            bgColor: "bg-gray-700",
        },
        {
            name: "Spring",
            img: springLogo,
            bgColor: "bg-cyan-900",
        },
    ];

    const [tag] = tagSettings.filter(
        (tagSetting) => tagSetting.name.toLowerCase() === type.toLowerCase()
    );

    const { bgColor, img, name } = tag;

    return (
        <div
            className={`rounded ${bgColor} px-2 flex py-1 space-x-1 w-[4.55rem] justify-center`}
        >
            <img src={img} alt="" className="w-4" />
            <span className="font-normal text-xs text-white">{name}</span>
        </div>
    );
};

export default Tag;
