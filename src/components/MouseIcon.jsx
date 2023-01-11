import React, { useEffect, useState } from "react";

const MouseIcon = () => {
	const [fadeScroll, setfadeScroll] = useState(false);

	useEffect(() => {
		const handleScroll = (event) => {
			const offset = 560;

			window.scrollY >= offset
				? setfadeScroll(true)
				: setfadeScroll(false);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<div className="pb-8 self-center">
			<div
				className={`border-2 border-stone-700  w-[1.7rem]  h-[2.8rem] rounded-full relative flex justify-center transition-opacity duration-500 ${
					fadeScroll ? "opacity-0" : "opacity-100"
				}`}
			>
				<div className="absolute w-[0.3rem] h-[0.3rem] bg-stone-600 border-2 border-stone-600 rounded-full animate-mouse-movement"></div>
			</div>
		</div>
	);
};

export default MouseIcon;
