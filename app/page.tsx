import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import HeroSection2 from "@/components/hero-section-2";
import IntegrationsSection from "@/components/integrations-1";
import Testimonials from "@/components/testimonials";

export default function Home() {
	return (
		<section id="home">
			<HeroSection2 />
			<IntegrationsSection />
			<Testimonials />
			<CallToAction />
			<FooterSection />
		</section>
	);
}
