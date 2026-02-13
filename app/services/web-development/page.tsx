import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import {
  Code,
  Palette,
  Smartphone,
  ShoppingCart,
  Zap,
  Globe,
  Database,
  Layout,
  CheckCircle,
  Layers,
  FileCode,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Services - React, Next.js, Custom Websites | Stryxon",
  description:
    "Professional web development services including React, Next.js, custom website development, web applications, e-commerce solutions, and responsive web design. Expert white-label web development partner.",
  keywords: [
    "web development services",
    "React development",
    "Next.js development",
    "custom website development",
    "web application development",
    "e-commerce development",
    "responsive web design",
    "frontend development",
    "full stack development",
    "JavaScript development",
    "TypeScript development",
    "progressive web apps",
    "single page applications",
    "web development agency",
    "white-label web development",
  ],
  alternates: {
    canonical: "https://www.stryxon.com/services/web-development",
  },
  openGraph: {
    title: "Web Development Services - React, Next.js, Custom Websites",
    description:
      "Modern web development with React, Next.js, and cutting-edge technologies. Fast, scalable, and beautiful websites.",
    url: "https://www.stryxon.com/services/web-development",
  },
};

// Browser mockup showing modern web app
function BrowserMockup() {
  return (
    <div className="border border-zinc-800 bg-black">
      <div className="border-b border-zinc-800 px-4 py-2 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 bg-zinc-900 rounded px-3 py-1 text-xs text-zinc-500 font-mono">
          https://your-website.com
        </div>
      </div>
      <div className="p-8 space-y-4">
        <div className="h-8 w-3/4 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30" />
        <div className="h-4 w-full bg-zinc-900 border border-zinc-800" />
        <div className="h-4 w-5/6 bg-zinc-900 border border-zinc-800" />
        <div className="grid grid-cols-3 gap-3 mt-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-square border border-zinc-800 bg-zinc-950 p-3"
            >
              <div className="w-full h-full bg-gradient-to-br from-orange-500/10 to-amber-500/10" />
            </div>
          ))}
        </div>
        <div className="mt-6 h-10 w-32 bg-gradient-to-r from-orange-600 to-amber-600 border border-orange-500" />
      </div>
    </div>
  );
}

export default function WebDevelopmentPage() {
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto border-l border-r border-zinc-800">
          {/* Hero */}
          <section className="grid lg:grid-cols-2 border-b border-zinc-800">
            <div className="p-12 lg:p-16 border-r border-zinc-800 flex flex-col justify-center">
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
                Web Development
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  Beautiful.
                  <br />
                  Fast.
                  <br />
                  Scalable.
                </span>
              </h1>
              <p className="text-lg text-zinc-400 mb-8 max-w-xl">
                Modern web applications built with React, Next.js, and
                TypeScript. Lightning-fast performance, pixel-perfect design,
                and seamless user experiences.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold border border-orange-500 hover:shadow-lg hover:shadow-orange-500/50 transition-all"
                >
                  Start Your Project
                </Link>
                <Link
                  href="#pricing"
                  className="px-6 py-3 border border-zinc-700 text-white font-semibold hover:bg-zinc-900/50 transition-all"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="p-12 lg:p-16 flex items-center justify-center border-b border-zinc-800">
              <BrowserMockup />
            </div>
          </section>

          {/* Metrics */}
          <section className="grid grid-cols-2 lg:grid-cols-4 border-b border-zinc-800">
            {[
              { value: "<100ms", label: "Page Load Time" },
              { value: "100/100", label: "Lighthouse Score" },
              { value: "99.9%", label: "Uptime" },
              { value: "SEO", label: "Optimized" },
            ].map((metric, i) => (
              <div
                key={i}
                className={`p-8 text-center border-r border-b border-zinc-800 hover:bg-gradient-to-br hover:from-orange-900/10 hover:to-amber-900/10 transition-all ${
                  i === 3 ? "border-r-0" : ""
                }`}
              >
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </section>

          {/* FAQ First (Shuffled) */}
          <section className="p-12 lg:p-16 border-b border-zinc-800 bg-zinc-950/50">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
              FAQ
            </div>
            <h2 className="text-3xl font-bold mb-12">Common Questions</h2>
            <div className="max-w-3xl space-y-8">
              {[
                {
                  q: "What technologies do you use for web development?",
                  a: "We specialize in modern stacks: React 19, Next.js 15, TypeScript, TailwindCSS, and Node.js. We choose the best tools based on your project requirements and long-term maintainability.",
                },
                {
                  q: "How long does it take to build a website?",
                  a: "Landing pages: 1-2 weeks. Corporate websites: 3-4 weeks. Complex web applications: 6-12 weeks. We provide detailed timelines during project scoping.",
                },
                {
                  q: "Do you offer e-commerce development?",
                  a: "Yes, we build custom e-commerce solutions with Shopify, WooCommerce, or headless commerce platforms. Full payment integration, inventory management, and admin dashboards.",
                },
                {
                  q: "What's included in ongoing maintenance?",
                  a: "Security updates, performance monitoring, CMS updates, minor content changes, bug fixes, and technical support. Available as monthly retainer packages.",
                },
                {
                  q: "Can you integrate with our existing systems?",
                  a: "Absolutely. We integrate with CRMs (Salesforce, HubSpot), payment gateways (Stripe, PayPal), analytics tools, and custom APIs. Full API integration services available.",
                },
              ].map((faq, i) => (
                <div key={i} className="border-b border-zinc-800 pb-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.q}</h3>
                  <p className="text-base text-zinc-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Description */}
          <section className="p-12 lg:p-16 border-b border-zinc-800">
            <div className="max-w-3xl">
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4">
                Overview
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Enterprise-Grade Web Development
              </h2>
              <p className="text-lg text-zinc-400 mb-4">
                We build blazing-fast web applications that convert visitors
                into customers. Every project starts with performance and user
                experience as core priorities, not afterthoughts.
              </p>
              <p className="text-lg text-zinc-400">
                From marketing websites to complex SaaS platforms, we deliver
                production-ready code with comprehensive testing, documentation,
                and deployment automation. Built for scale from day one.
              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 border-b border-zinc-800">
            {[
              {
                icon: <Code className="w-6 h-6" />,
                title: "Custom Website Development",
                description:
                  "Bespoke websites built from scratch with React, Next.js, and modern frameworks. Tailored to your brand.",
              },
              {
                icon: <ShoppingCart className="w-6 h-6" />,
                title: "E-commerce Solutions",
                description:
                  "Online stores with Shopify, WooCommerce, or custom solutions. Payment integration and inventory management.",
              },
              {
                icon: <Layout className="w-6 h-6" />,
                title: "Web Applications",
                description:
                  "Complex web apps with dashboards, CRM systems, SaaS platforms, and business management tools.",
              },
              {
                icon: <Palette className="w-6 h-6" />,
                title: "Landing Page Design",
                description:
                  "High-converting landing pages optimized for conversions. A/B testing and analytics integration.",
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "Progressive Web Apps",
                description:
                  "PWAs that work offline, load instantly, and provide app-like experience with push notifications.",
              },
              {
                icon: <FileCode className="w-6 h-6" />,
                title: "CMS Development",
                description:
                  "Headless CMS integration with Contentful, Sanity, Strapi. Easy content management for teams.",
              },
              {
                icon: <Database className="w-6 h-6" />,
                title: "API Integration",
                description:
                  "Connect third-party services, payment gateways, CRMs, and analytics tools. REST and GraphQL APIs.",
              },
              {
                icon: <Layers className="w-6 h-6" />,
                title: "Website Redesign",
                description:
                  "Modernize outdated websites. UI/UX improvements, performance optimization, and mobile responsiveness.",
              },
              {
                icon: <Workflow className="w-6 h-6" />,
                title: "Maintenance & Support",
                description:
                  "Ongoing website maintenance, security updates, performance monitoring, and technical support.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-8 border-r border-b border-zinc-800 hover:bg-gradient-to-br hover:from-orange-900/10 hover:to-amber-900/10 transition-all group"
              >
                <div className="text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-zinc-400">{service.description}</p>
              </div>
            ))}
          </section>

          {/* Tech Stack */}
          <section className="p-12 lg:p-16 border-b border-zinc-800 bg-zinc-950/50">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
              Technologies
            </div>
            <h2 className="text-3xl font-bold mb-8">Modern Web Stack</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "React 19",
                "Next.js 15",
                "TypeScript",
                "JavaScript",
                "TailwindCSS",
                "Framer Motion",
                "Redux",
                "React Query",
                "GraphQL",
                "REST API",
                "Node.js",
                "Express",
                "PostgreSQL",
                "MongoDB",
                "Prisma",
                "Vercel",
                "AWS",
                "Docker",
                "Stripe",
                "Contentful",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 border border-zinc-800 text-sm font-mono hover:border-orange-500/50 hover:bg-orange-900/10 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="p-12 lg:p-16 border-b border-zinc-800">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
              Methodology
            </div>
            <h2 className="text-3xl font-bold mb-12">Development Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  phase: "Week 1",
                  title: "Discovery & Design",
                  description:
                    "Requirements gathering, wireframes, mockups, and technical architecture planning.",
                },
                {
                  phase: "Week 2-3",
                  title: "Development",
                  description:
                    "Frontend and backend development, API integration, CMS setup, and feature implementation.",
                },
                {
                  phase: "Week 4",
                  title: "Testing & QA",
                  description:
                    "Cross-browser testing, performance optimization, security audit, and bug fixes.",
                },
                {
                  phase: "Week 5",
                  title: "Launch & Support",
                  description:
                    "Deployment, DNS setup, SSL configuration, training, and 30-day post-launch support.",
                },
              ].map((step, i) => (
                <div key={i} className="border border-zinc-800 p-6">
                  <div className="font-mono text-xs text-orange-400 mb-3">
                    {step.phase}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-zinc-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section
            id="pricing"
            className="p-12 lg:p-16 border-b border-zinc-800"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
              Investment
            </div>
            <h2 className="text-3xl font-bold mb-12">
              Web Development Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Landing Page",
                  price: "$3,000",
                  timeline: "1-2 weeks",
                  features: [
                    "Single landing page",
                    "Responsive design",
                    "Contact form integration",
                    "SEO optimization",
                    "Analytics setup",
                  ],
                },
                {
                  name: "Corporate Website",
                  price: "$8,000",
                  timeline: "3-4 weeks",
                  features: [
                    "5-10 pages",
                    "CMS integration",
                    "Blog functionality",
                    "Advanced animations",
                    "Payment integration",
                  ],
                  featured: true,
                },
                {
                  name: "Web Application",
                  price: "$20,000+",
                  timeline: "6-12 weeks",
                  features: [
                    "Custom functionality",
                    "User authentication",
                    "Database design",
                    "API development",
                    "Admin dashboard",
                  ],
                },
              ].map((pkg, i) => (
                <div
                  key={i}
                  className={`p-8 border ${
                    pkg.featured
                      ? "border-orange-500 bg-gradient-to-br from-orange-900/10 to-amber-900/10"
                      : "border-zinc-800"
                  }`}
                >
                  <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-3">
                    {pkg.name}
                  </div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                    {pkg.price}
                  </div>
                  <div className="text-sm text-zinc-400 mb-6">
                    {pkg.timeline}
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Guarantee */}
          <section className="p-12 lg:p-16 border-b border-zinc-800 bg-zinc-950/50">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
              Commitment
            </div>
            <h2 className="text-3xl font-bold mb-8">Our Promise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "100/100 Lighthouse performance score",
                "Mobile-first responsive design",
                "SEO optimized from day one",
                "Cross-browser compatibility tested",
                "30-day post-launch support included",
                "Full source code ownership",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 border border-zinc-800"
                >
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="p-12 lg:p-16 text-center border-b border-zinc-800">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Get a free project consultation and detailed proposal
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold border border-orange-500 hover:shadow-lg hover:shadow-orange-500/50 transition-all text-lg"
            >
              Start Your Web Project
            </Link>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
