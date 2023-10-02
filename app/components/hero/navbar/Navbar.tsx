import Image from "next/image";
import Link from "next/link";

const Github = "/icon-github.svg";
const Linkedin = "/icon-linkedin.svg";
const Twitter = "/icon-twitter.svg";

const Navbar = () => {
	return (
		<div className="flex justify-between w-[1110px]">
			<div>
				<h1 className="text-[32px] font-bold">jaredbrown</h1>
			</div>

			<div className="flex justify-between h-[25px] w-[140px]">
				<Link href="https://github.com/JaredBrown1">
					<Image src={Github} width={25} height={25} alt="github logo" />
				</Link>
				<Link href="https://www.linkedin.com/in/jared-brown1/">
					<Image src={Linkedin} width={25} height={25} alt="linked logo" />
				</Link>
				<Link href="https://twitter.com/JaredCodes">
					<Image src={Twitter} width={25} height={25} alt="twitter logo" />
				</Link>
			</div>
		</div>
	);
};
export default Navbar;
