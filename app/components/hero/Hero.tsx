import Navbar from "./navbar/Navbar";

const Hero = () => {
	return (
		<div>
			<Navbar />
			<div className="flex mt-[-84px]">
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
						<p className="pt-[66px] w-[117px] border-b-2 border-b-[#4EE1A0] font-bold tracking-widest text-center">
							CONTACT ME
						</p>
					</div>
				</div>
				<div className="h-[720px] w-[445px] border-2"></div>
			</div>
		</div>
	);
};
export default Hero;
