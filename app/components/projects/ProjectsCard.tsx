import Image from "next/image";

const ProjectsCard = (props: {
	src: string;
	alt: string;
	title: string;
	skills: string;
}) => {
	return (
		<div className="pt-[69px]">
			<Image src={props.src} width={545} height={350} alt={props.alt} />
			<div className="pt-[20px]">
				<h1 className="text-[24px] font-bold">{props.title}</h1>
				<p>{props.skills}</p>
			</div>
		</div>
	);
};
export default ProjectsCard;
