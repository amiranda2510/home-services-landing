import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/services-section";
import CompareSlider from "@/components/projects-slider";
import { AboutSection } from "@/components/about-section";

export default function Home() {
	return (
		<section id="home">
			<HeroSection />
			<IntegrationsSection />
			<CompareSlider />
			<AboutSection />
			<CallToAction />
			<FooterSection />
		</section>
	);
}
