import Navbar from "../hero/navbar/Navbar";

const Footer = () => {
	return (
		<div
			id="contact"
			className="pt-[80px] lg:flex lg:flex-col lg:justify-around lg:mt-[139px] lg:pt-[84px] lg:h-[675px] lg:w-[1200px] lg:border-t border-white"
		>
			<div className="text-center lg:flex lg:justify-between lg:pb-20">
				<div>
					<h1 className="text-[40px] lg:text-[88px] font-bold">Contact</h1>
					<p>
						I would love to hear about your project and how I could help. Please
						fill in the form, and I’ll get back to you as soon as possible.
					</p>
				</div>

				<form className="flex flex-col pt-[50px] lg:w-[445px]">
					<input
						className="bg-black h-[43px] border-b-[1px] pl-4"
						type="text"
						placeholder="Name"
					/>
					<input
						className="bg-black h-[43px] border-b-[1px] pl-4 mt-6"
						type="email"
						placeholder="Email"
					/>
					<textarea
						className="bg-black h-[107px] border-b-[1px] pl-4 mt-6 resize-none"
						placeholder="Message"
					></textarea>
					<button className="border-b-[#4EE1A0] hover:text-[#4EE1A0] border-b-2 w-[120px] text-[16px] font-bold pt-8 ml-[240px] lg:ml-[320px]">
						SEND MESSAGE
					</button>
				</form>
			</div>

			<div className="border-t-2 mt-[87px] pt-[39px] pb-[60px] lg:border-t-0 lg:mt-0 lg:pt-0">
				<Navbar />
			</div>
		</div>
	);
};
export default Footer;
