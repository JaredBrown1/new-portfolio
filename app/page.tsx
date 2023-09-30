import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center pt-[39px] w-[1110px] text-white">
			<Hero />
			<Skills />
			<Projects />
		</main>
	);
}
