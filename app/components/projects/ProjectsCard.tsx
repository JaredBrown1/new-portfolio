import Image from "next/image";

const ProjectsCard = () => {
	return (
		<div className="pt-[69px]">
			<Image
				src="/images/airbnb_clone.png"
				width={545}
				height={400}
				alt="airbnb screenshot"
			/>
			<div className="pt-[20px]">
				<h1 className="text-[24px] font-bold">Airbnb Clone</h1>
				<p>HTML - CSS</p>
			</div>
		</div>
	);
};
export default ProjectsCard;
