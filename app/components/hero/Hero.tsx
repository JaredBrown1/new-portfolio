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
			<div className="flex flex-col-reverse items-center text-center pt-12 lg:pt-0 lg:pb-20">
				<div>
					<div className="pt-[40px] lg:w-[800px] lg:pt-[127px]">
						<h1 className="text-[40px] lg:text-[88px] font-bold lg:h-24 leading-6 lg:leading-10">
							Nice to meet you!
						</h1>
						<h1 className="text-[40px] lg:text-[88px] font-bold">
							I&apos;m{" "}
							<span className="underline decoration-[#4EE1A0]">
								Jared Brown
							</span>
							.
						</h1>
						<p className="text-[16px] pt-[24px] lg:text-[18px] lg:pt-[37px]">
							Based in Southern California, I&apos;m a full stack developer
							passionate about building accessible apps that users can love.
						</p>
						<button
							onClick={handleClick}
							className="pt-[24px] w-[117px] border-b-2 border-b-[#4EE1A0] font-bold tracking-widest text-center hover:text-[#4EE1A0] lg:pt-[66px]"
						>
							CONTACT ME
						</button>
					</div>
				</div>
				<div className="lg:h-[612px] lg:w-[445px] lg:pt-[70px]">
					<Image
						src="/images/profile.jpg"
						width={174}
						height={720}
						alt="profile"
					/>
				</div>
			</div>
		</div>
	);
};
export default Hero;
