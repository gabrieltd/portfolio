import React from "react";
import nodeLogo from "../assets/node-logo.png";
import springLogo from "../assets/spring-logo.png";
import reactLogo from "../assets/react-logo.png";
import pythonLogo from "../assets/python-logo.png";
import angularLogo from "../assets/angular-logo.png";

const Tag = ({ type }) => {
	const tagSettings = [
		{
			name: "Node",
			img: nodeLogo,
			bgColor: "bg-lime-800",
			width: "w-[14px]",
			heigth: "w-[14px]",
		},
		{
			name: "React",
			img: reactLogo,
			bgColor: "bg-gray-700",
			width: "w-[15px]",
			heigth: "w-[15px]",
		},
		{
			name: "Python",
			img: pythonLogo,
			bgColor: "bg-gray-700",
			width: "w-[14px]",
			heigth: "w-[14px]",
		},
		{
			name: "Spring",
			img: springLogo,
			bgColor: "bg-cyan-900",
			width: "w-[14px]",
			heigth: "w-[14px]",
		},
		{
			name: "Angular",
			img: angularLogo,
			bgColor: "bg-gray-800",
			width: "w-[18px]",
			heigth: "w-[18px]",
		},
	];

	const [tag] = tagSettings.filter(
		(tagSetting) => tagSetting.name.toLowerCase() === type.toLowerCase()
	);

	const { bgColor, img, name, width, heigth } = tag;

	return (
		<div
			className={`rounded ${bgColor} flex space-x-1 px-2  h-[23px] justify-center items-center select-none`}
		>
			<img src={img} alt="" className={`${width} ${heigth}`} />
			<span className="font-normal text-xs text-white">{name}</span>
		</div>
	);
};

export default Tag;
