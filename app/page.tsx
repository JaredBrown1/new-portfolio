import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

export default function Home() {
	return (
		<main className="w-[375px] pt-[20px] lg:flex lg:min-h-screen lg:flex-col lg:items-center lg:pt-[39px] lg:w-[1110px] text-white">
			<Hero />
			<Skills />
			<Projects />
			<Footer />
		</main>
	);
}
