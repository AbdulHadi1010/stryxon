"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import WhatsAppButton from "@/components/ui/whatsapp-button";

const InfiniteHero = dynamic(() => import("@/components/ui/infinite-hero"), {
  ssr: false,
  loading: () => <div className="h-screen bg-black" />,
});

const StackFeatureSection = dynamic(
  () => import("@/components/ui/stack-feature-section"),
  {
    loading: () => <div className="h-96 bg-transparent" />,
  },
);

const ServicesSection = dynamic(() => import("@/components/services-section"), {
  loading: () => <div className="h-96 bg-transparent" />,
});

const Testimonials = dynamic(() => import("@/components/testimonials-new"), {
  loading: () => <div className="h-96 bg-transparent" />,
});

const GlobeFeatureSection = dynamic(
  () => import("@/components/ui/globe-feature-section"),
  {
    ssr: false,
    loading: () => <div className="h-96 bg-transparent" />,
  },
);

const ContactForm = dynamic(() => import("@/components/contact-form"), {
  loading: () => <div className="h-96 bg-transparent" />,
});

export default function Home() {
  return (
    <>
      <WhatsAppButton />
      <section id="hero">
        <Suspense fallback={<div className="h-screen bg-black" />}>
          <InfiniteHero />
        </Suspense>
      </section>
      <div id="stack">
        <Suspense fallback={<div className="h-96 bg-transparent" />}>
          <StackFeatureSection />
        </Suspense>
      </div>
      <div id="services">
        <Suspense fallback={<div className="h-96 bg-transparent" />}>
          <ServicesSection />
        </Suspense>
      </div>
      <div id="testimonials">
        <Suspense fallback={<div className="h-96 bg-transparent" />}>
          <Testimonials />
        </Suspense>
      </div>
      <Suspense fallback={<div className="h-96 bg-transparent" />}>
        <GlobeFeatureSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-transparent" />}>
        <ContactForm />
      </Suspense>
    </>
  );
}
