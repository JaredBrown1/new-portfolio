"use client";

import Navbar from "./navbar/Navbar";
import Image from "next/image";

const Hero = () => {
	const handleClick = () => {
		const contactSection: any = document.getElementById("contact");
		contactSection.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div>
			<Navbar />
			<div className="flex pb-20">
				<div>
					<div className="w-[800px] pt-[127px]">
						<h1 className="text-[88px] font-bold h-24">Nice to meet you!</h1>
						<h1 className="text-[88px] font-bold">
							I&apos;m{" "}
							<span className="underline decoration-[#4EE1A0]">
								Jared Brown
							</span>
							.
						</h1>
						<p className="text-[18px] pt-[37px]">
							Based in Southern California, I&apos;m a full stack developer
							<br />
							passionate about building accessible apps that users can love.
						</p>
						<button
							onClick={handleClick}
							className="pt-[66px] w-[117px] border-b-2 border-b-[#4EE1A0] font-bold tracking-widest text-center hover:text-[#4EE1A0]"
						>
							CONTACT ME
						</button>
					</div>
				</div>
				<div className="h-[612px] w-[445px] pt-[70px]">
					<Image
						src="/images/profile.jpg"
						width={445}
						height={720}
						alt="profile"
					/>
				</div>
			</div>
		</div>
	);
};
export default Hero;
