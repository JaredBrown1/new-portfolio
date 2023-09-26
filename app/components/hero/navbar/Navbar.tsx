import Image from "next/image";

const Navbar = () => {
	return (
		<div className="flex justify-between w-[1200px]">
			<div>
				<h1 className="text-[32px] font-bold">jaredbrown</h1>
			</div>
			<div className="flex justify-between h-[25px] w-[140px]">
				<Image
					src="/icon-github.svg"
					width={25}
					height={25}
					alt="github logo"
				/>
				<Image
					src="/icon-linkedin.svg"
					width={25}
					height={25}
					alt="linked logo"
				/>
				<Image
					src="/icon-twitter.svg"
					width={25}
					height={25}
					alt="twitter logo"
				/>
			</div>
		</div>
	);
};
export default Navbar;
