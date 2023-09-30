import ProjectsCard from "./ProjectsCard";

const Projects = () => {
	return (
		<div className="pt-[140px]">
			<div className="flex justify-between w-[1200px]">
				<h1 className="text-[88px] font-bold">Projects</h1>
				<p className="mt-8 pt-3 w-[117px] h-[38px] border-b-2 border-b-[#4EE1A0] font-bold tracking-widest text-center">
					CONTACT ME
				</p>
			</div>
			<div className="pt-10 flex flex-wrap justify-between col-md-6">
				<ProjectsCard />
				<ProjectsCard />
				<ProjectsCard />
				<ProjectsCard />
				<ProjectsCard />
				<ProjectsCard />
			</div>
		</div>
	);
};
export default Projects;
