import Navbar from "../hero/navbar/Navbar";

const Footer = () => {
	return (
		<div
			id="contact"
			className="flex flex-col justify-around mt-[139px] pt-[84px] h-[675px] w-[1200px] border-t border-white"
		>
			<div className="flex justify-between pb-20">
				<div>
					<h1 className="text-[88px] font-bold">Contact</h1>
					<p>
						I would love to hear about your project and how I <br /> could help.
						Please fill in the form, and I’ll get back <br /> to you as soon as
						possible.
					</p>
				</div>

				<form className="flex flex-col w-[445px]">
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
					<button className="border-b-[#4EE1A0] hover:text-[#4EE1A0] border-b-2 w-[120px] text-[16px] font-bold pt-8 ml-[320px]">
						SEND MESSAGE
					</button>
				</form>
			</div>

			<div>
				<Navbar />
			</div>
		</div>
	);
};
export default Footer;
