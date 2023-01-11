import React, { useEffect, useState } from "react";
import image from "../assets/placeholder.png";
import photo from "../assets/photo.jpg";
import BackgroundOptions from "./BackgroundOptions";
import MouseIcon from "./MouseIcon";

const Profile = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<>
			<div className="bg-white relative overflow-hidden selection:bg-[#ffc64c]">
				<BackgroundOptions handleOpen={handleOpen} openState={open} />

				<div
					className={`bg-white z-20 relative transition duration-500 ${
						open ? "translate-y-12 md:translate-y-10 -rotate-6" : ""
					}`}
				>
					<div className="absolute bg-white top-0 -right-40 w-[1200rem] h-40"></div>

					<div className="max-w-5xl m-auto h-screen flex flex-col justify-between py-4">
						<span></span>

						<div className="flex justify-center xl:justify-start lg:flex-row flex-col lg:items-start items-center">
							<div className="w-48 h-48">
								<div className="aspect-w-2 aspect-h-2">
									<img
										src={photo}
										alt=""
										className="object-cover rounded shadow"
									/>
								</div>
							</div>

							<div className="py-2 px-10 lg:text-start text-center mt-10 lg:mt-0">
								<a
									href="https://www.linkedin.com/in/gabriel-tabilo-1752261bb/"
									className="hover:border-[#ffc64c] border-gray-700 border-b-2 border-dotted text-stone-700 pb-1"
								>
									<h1 className="lg:text-[2.5rem] text-5xl font-bold inline">
										Gabriel Tabilo
									</h1>
								</a>
								<span className="text-4xl font-bold text-gray-700">
									.
								</span>

								<h3 className="font-serif text-gray-600 lg:text-[1.05rem] text-lg mt-5 max-w-md">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Non deleniti ea ex
									mollitia dignissimos maiores iusto eveniet
									numquam perspiciatis.
								</h3>
							</div>
						</div>

						<MouseIcon></MouseIcon>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
