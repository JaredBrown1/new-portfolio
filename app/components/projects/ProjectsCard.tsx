import Image from "next/image";
import Link from "next/link";

const ProjectsCard = (props: {
	src: string;
	alt: string;
	title: string;
	skills: string;
	project: string;
	code: string;
}) => {
	return (
		<div className="pt-[69px]">
			<Image src={props.src} width={545} height={350} alt={props.alt} />
			<div className="pt-[20px]">
				<h1 className="text-[24px] font-bold">{props.title}</h1>
				<p>{props.skills}</p>
				<div className="flex justify-start pt-4 ">
					<Link
						href={props.project}
						className="border-b-[#4EE1A0] border-b-2 mr-[80px] hover:text-[#4EE1A0]"
					>
						View Project
					</Link>
					<Link
						href={props.code}
						className="border-b-[#4EE1A0] border-b-2 hover:text-[#4EE1A0]"
					>
						View code
					</Link>
				</div>
			</div>
		</div>
	);
};
export default ProjectsCard;
