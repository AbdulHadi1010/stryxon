export const metadata = {
  title: "Stryxon Technologies - Engineering Intelligence",
  description:
    "The White-Label Technical Partner for Agencies. We combine Immutable Cloud Infrastructure with Custom AI Agents.",
};

import InfiniteHero from "@/components/ui/infinite-hero";
import Testimonials from "@/components/testimonials-new";
import StackFeatureSection from "@/components/ui/stack-feature-section";
import ServicesSection from "@/components/services-section";
import GlobeFeatureSection from "@/components/ui/globe-feature-section";

export default function Home() {
  return (
    <>
      <section id="hero">
        <InfiniteHero />
      </section>
      <div id="stack">
        <StackFeatureSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <GlobeFeatureSection />
      </div>
    </>
  );
}
