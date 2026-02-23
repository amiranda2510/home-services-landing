import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";
import HeroSection2 from "@/components/hero-section-2";
import IntegrationsSection from "@/components/services-section";
import CompareSlider from "@/components/compare-slider";
import { AboutSection } from "@/components/about-section";

export default function Home() {
	return (
		<section id="home">
			<HeroSection2 />
			<IntegrationsSection />
			<CompareSlider />
			<AboutSection />
			<CallToAction />
			<FooterSection />
		</section>
	);
}
