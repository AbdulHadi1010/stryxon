import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import TerminalMockup from "@/components/terminal-mockup";
import LighthouseScoreMockup from "@/components/lighthouse-mockup";
import ContactCTA from "@/components/contact-cta";
import { servicesData } from "@/lib/services-data";
import {
  CheckCircle,
  ChevronRight,
  Server,
  Image,
  FileCode,
  Layout,
  Zap,
  ExternalLink,
  Shield,
  Activity,
  Lock,
  Settings,
  FileText,
} from "lucide-react";

// Icon mapping
const iconMap: Record<string, any> = {
  Server,
  Image,
  FileCode,
  Layout,
  Zap,
  ExternalLink,
  Shield,
  Activity,
  Lock,
  Settings,
  FileText,
};

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const service = servicesData[params.slug];
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.metadata.title,
    description: service.metadata.description,
    keywords: service.metadata.keywords,
    alternates: {
      canonical: `https://www.stryxon.com/services/${params.slug}`,
    },
    openGraph: {
      title: service.metadata.title,
      description: service.metadata.description,
      url: `https://www.stryxon.com/services/${params.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export default function ServicePage({ params }: PageProps) {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Stryxon Technologies",
      url: "https://www.stryxon.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-zinc-950 text-white">
        {/* Hero Section - 2-Column Split */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 border-x border-zinc-800">
              {/* Left: Headline */}
              <div className="p-16 lg:p-24 flex flex-col justify-center border-r border-zinc-800">
                <div className="mb-4">
                  <span className="text-xs text-zinc-500 uppercase tracking-widest">
                    Service
                  </span>
                </div>
                <h1 className="text-6xl lg:text-7xl font-medium tracking-tighter uppercase text-white leading-[0.9] mb-8">
                  {service.title}
                </h1>
                <p className="text-base text-zinc-400 leading-relaxed mb-12 max-w-lg">
                  {service.subtitle}
                </p>
                <div>
                  <Link
                    href={`/#contact?source=${service.slug}-hero`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium uppercase tracking-wider hover:bg-zinc-200 transition-colors border-2 border-white"
                  >
                    Request Consultation
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="p-16 lg:p-24 flex items-center justify-center bg-zinc-950">
                {service.heroVisual === "lighthouse" && (
                  <LighthouseScoreMockup />
                )}

                {service.heroVisual === "terminal" && (
                  <TerminalMockup
                    title="infrastructure status"
                    variant="success"
                    lines={[
                      "$ terraform apply -auto-approve",
                      "aws_vpc.main: Creating...",
                      "aws_vpc.main: Creation complete after 2s [id=vpc-0a1b2c3d]",
                      "aws_subnet.public: Creating...",
                      "aws_eks_cluster.main: Creating...",
                      "",
                      "Apply complete! Resources: 47 added, 0 changed, 0 destroyed.",
                      "",
                      "✓ Multi-region deployment complete",
                      "✓ Auto-scaling enabled",
                      "✓ 99.99% uptime achieved",
                    ]}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Bar - 4-Column Bordered Grid */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 border-x border-zinc-800">
              {service.metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`p-8 text-center ${
                    index < 3 ? "border-r border-zinc-800" : ""
                  } ${index < 2 ? "border-b lg:border-b-0 border-zinc-800" : ""}`}
                >
                  <div className="text-sm text-zinc-500 uppercase tracking-widest mb-3">
                    {metric.label}
                  </div>
                  <div className="text-4xl font-medium tracking-tighter text-white">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-x border-zinc-800">
            <div className="p-16 lg:p-24">
              <p className="text-lg text-zinc-400 leading-relaxed max-w-4xl">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Features - 3x3 Grid with Internal Borders */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="border-x border-zinc-800">
              {/* Grid Header */}
              <div className="px-16 lg:px-24 py-12 border-b border-zinc-800">
                <h2 className="text-4xl font-medium tracking-tighter uppercase text-white">
                  Capabilities
                </h2>
              </div>

              {/* 3x3 Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3">
                {service.features.map((feature, index) => {
                  const Icon = iconMap[feature.icon] || Server;
                  const isLastRow = index >= service.features.length - 3;
                  const isRightMost = (index + 1) % 3 === 0;

                  return (
                    <div
                      key={index}
                      className={`p-12 hover:bg-zinc-900 transition-colors cursor-default ${
                        !isRightMost ? "border-r border-zinc-800" : ""
                      } ${!isLastRow ? "border-b border-zinc-800" : ""}`}
                    >
                      <Icon className="w-8 h-8 text-white mb-8" />
                      <h3 className="text-sm font-medium uppercase tracking-widest text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-x border-zinc-800">
            <div className="px-16 lg:px-24 py-12 border-b border-zinc-800">
              <h2 className="text-4xl font-medium tracking-tighter uppercase text-white">
                Process
              </h2>
            </div>

            <div className="divide-y divide-zinc-800">
              {service.process.map((step, index) => (
                <div
                  key={index}
                  className="grid lg:grid-cols-12 hover:bg-zinc-900 transition-colors"
                >
                  <div className="lg:col-span-2 p-12 lg:border-r border-zinc-800">
                    <div className="text-6xl font-medium tracking-tighter text-zinc-800">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="lg:col-span-10 p-12">
                    <div className="text-xs text-zinc-500 uppercase tracking-widest mb-4">
                      {step.phase}
                    </div>
                    <h3 className="text-2xl font-medium tracking-tight text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed max-w-3xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-x border-zinc-800">
            <div className="px-16 lg:px-24 py-12 border-b border-zinc-800">
              <h2 className="text-4xl font-medium tracking-tighter uppercase text-white">
                Investment
              </h2>
            </div>

            <div className="p-16 lg:p-24">
              <div className="border border-zinc-800 p-16">
                <div className="mb-12">
                  <div className="text-xs text-zinc-500 uppercase tracking-widest mb-4">
                    {service.pricing.package}
                  </div>
                  <div className="text-6xl font-medium tracking-tighter text-white mb-2">
                    {service.pricing.price}
                  </div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wider">
                    {service.pricing.duration}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 mb-12 pb-12 border-b border-zinc-800">
                  {service.pricing.includes.map((item, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="w-1 h-1 bg-white mt-2 shrink-0" />
                      <span className="text-sm text-zinc-400">{item}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <Link
                    href={`/#contact?source=${service.slug}-pricing`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium uppercase tracking-wider hover:bg-zinc-200 transition-colors border-2 border-white"
                  >
                    Get Started
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-x border-zinc-800">
            <div className="px-16 lg:px-24 py-12 border-b border-zinc-800">
              <h2 className="text-4xl font-medium tracking-tighter uppercase text-white">
                Guarantee
              </h2>
            </div>

            <div className="p-16 lg:p-24">
              <div className="space-y-8">
                {service.guarantee.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6 items-start pb-8 border-b border-zinc-800 last:border-b-0"
                  >
                    <div className="w-6 h-6 border border-zinc-800 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white" />
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-x border-zinc-800">
            <div className="px-16 lg:px-24 py-12 border-b border-zinc-800">
              <h2 className="text-4xl font-medium tracking-tighter uppercase text-white">
                FAQ
              </h2>
            </div>

            <div className="divide-y divide-zinc-800">
              {service.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-16 lg:p-24 hover:bg-zinc-900 transition-colors"
                >
                  <h3 className="text-sm font-medium uppercase tracking-widest text-white mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed max-w-3xl">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <div className="max-w-7xl mx-auto border-x border-zinc-800">
            <div className="p-16 lg:p-24">
              <ContactCTA
                leadSource={`${service.slug}-final-cta`}
                headline="READY TO DEPLOY?"
                description="Schedule a 30-minute technical consultation to discuss your infrastructure requirements and get a customized architecture proposal."
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
