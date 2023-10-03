"use client";

import ProjectsCard from "./ProjectsCard";

const Projects = () => {
	const handleClick = () => {
		const contactSection: any = document.getElementById("contact");
		contactSection.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="pt-[80px] lg:pt-[140px]">
			<div className="flex justify-between lg:w-[1200px]">
				<h1 className="font-bold text-[40px] lg:text-[88px]">Projects</h1>
				<button
					onClick={handleClick}
					className="mt-2 pt-3 w-[117px] h-[38px] border-b-2 border-b-[#4EE1A0] font-bold tracking-widest text-center hover:text-[#4EE1A0] lg:mt-8"
				>
					CONTACT ME
				</button>
			</div>
			<div className="flex flex-wrap justify-between col-md-6 lg:pt-10">
				<ProjectsCard
					src="/images/airbnb.png"
					alt="airbnb clone"
					title="Airbnb Clone"
					skills="NextJS - TailwindCSS - PrismaDB"
					project="https://vacation-rent.vercel.app/"
					code="https://github.com/JaredBrown1/airbnb-clone"
				/>
				<ProjectsCard
					src="/images/dictionary.png"
					alt="dictionary app"
					title="Dictionary App"
					skills="NextJS - TailwindCSS - Local Storage - Dark Mode"
					project="https://jareds-dictionary-app.vercel.app/"
					code="https://github.com/JaredBrown1/dictionary"
				/>
				<ProjectsCard
					src="/images/crwn_clothing.png"
					alt="crown clothing"
					title="Crown Clothing"
					skills="React - Styled-Components - Redux - Firebase - Stripe"
					project="https://crwn-clothing-nine.vercel.app/"
					code="https://github.com/JaredBrown1/crwn-clothing"
				/>
				<ProjectsCard
					src="/images/music_player.png"
					alt="music player"
					title="Music Player"
					skills="HTML - CSS - Javascript"
					project="https://jaredbrown1.github.io/music-player/"
					code="https://github.com/JaredBrown1/music-player"
				/>
			</div>
		</div>
	);
};
export default Projects;
