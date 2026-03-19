import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";
import HeroSection2 from "@/components/hero-section-2";
import IntegrationsSection from "@/components/services-section";
import CompareSlider from "@/components/projects-slider";
import { AboutSection } from "@/components/about-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
	return (
		<section id="home">
			<HeroSection2 />
			<CallToAction />
			<IntegrationsSection />
			<CompareSlider />
			<AboutSection />
			<FooterSection />
		</section>
	);
}
