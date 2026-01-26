import type { Metadata } from "next";
import Link from "next/link";

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
};

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Web Development Services
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Modern web development with React, Next.js, and cutting-edge
            technologies. Fast, scalable, and beautiful websites that convert
            visitors into customers.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">
            Our Web Development Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Custom Website Development",
                description:
                  "Bespoke websites built from scratch with React, Next.js, and modern frameworks. Tailored to your brand and business goals.",
                keywords: "Custom, Bespoke, Tailored",
              },
              {
                title: "E-commerce Solutions",
                description:
                  "Online stores with Shopify, WooCommerce, or custom solutions. Payment integration, inventory management, and SEO optimization.",
                keywords: "Shopify, WooCommerce, Stripe",
              },
              {
                title: "Web Applications",
                description:
                  "Complex web apps with dashboards, CRM systems, SaaS platforms, and business management tools. Scalable architecture.",
                keywords: "Web Apps, SaaS, Dashboard",
              },
              {
                title: "Landing Page Design",
                description:
                  "High-converting landing pages optimized for conversions. A/B testing, analytics integration, and lead capture forms.",
                keywords: "Landing Pages, Conversion, Lead Gen",
              },
              {
                title: "Progressive Web Apps",
                description:
                  "PWAs that work offline, load instantly, and provide app-like experience. Push notifications and home screen installation.",
                keywords: "PWA, Offline, Mobile-First",
              },
              {
                title: "CMS Development",
                description:
                  "Headless CMS integration with Contentful, Sanity, Strapi. Easy content management for marketing teams.",
                keywords: "CMS, Contentful, Headless",
              },
              {
                title: "API Integration",
                description:
                  "Connect third-party services, payment gateways, CRMs, and analytics tools. RESTful and GraphQL APIs.",
                keywords: "API, Integration, REST, GraphQL",
              },
              {
                title: "Website Redesign",
                description:
                  "Modernize outdated websites. UI/UX improvements, performance optimization, and mobile responsiveness.",
                keywords: "Redesign, Modernization, UX",
              },
              {
                title: "Maintenance & Support",
                description:
                  "Ongoing website maintenance, security updates, performance monitoring, and technical support.",
                keywords: "Support, Maintenance, Updates",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-gray-900/50 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="text-sm text-blue-400">{service.keywords}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React 19",
              "Next.js 15",
              "TypeScript",
              "JavaScript",
              "TailwindCSS",
              "Material UI",
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
            ].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">
            Why Choose Our Web Development?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "⚡",
                title: "Lightning Fast",
                description:
                  "Sub-2 second load times with Next.js SSR/SSG, optimized images, and CDN delivery. Perfect Google PageSpeed scores.",
              },
              {
                icon: "📱",
                title: "Mobile-First",
                description:
                  "Responsive design that works flawlessly on all devices. Touch-optimized interfaces and mobile performance.",
              },
              {
                icon: "🎨",
                title: "Beautiful Design",
                description:
                  "Modern, clean UI/UX that engages users. Micro-interactions, smooth animations, and intuitive navigation.",
              },
              {
                icon: "🔍",
                title: "SEO Optimized",
                description:
                  "Built-in SEO best practices. Structured data, semantic HTML, and meta tags for top Google rankings.",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/20 rounded-xl p-8"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">
            Development Process
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Discovery",
                description:
                  "Understand business goals, target audience, and project requirements. Create wireframes and prototypes.",
              },
              {
                step: "2",
                title: "Design",
                description:
                  "Create stunning UI/UX designs. Mockups, color schemes, typography, and branding integration.",
              },
              {
                step: "3",
                title: "Development",
                description:
                  "Build with React/Next.js. Clean code, reusable components, and best practices.",
              },
              {
                step: "4",
                title: "Testing",
                description:
                  "Cross-browser testing, mobile testing, performance optimization, and bug fixing.",
              },
              {
                step: "5",
                title: "Launch",
                description:
                  "Deploy to production with CI/CD. Domain setup, SSL certificates, and monitoring.",
              },
              {
                step: "6",
                title: "Support",
                description:
                  "Ongoing maintenance, updates, and feature enhancements as needed.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-6 items-start bg-gray-900/30 border border-gray-800 rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">
            Web Development FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How much does web development cost?",
                a: "Simple websites: $3,000-$10,000. Business websites: $10,000-$25,000. E-commerce: $15,000-$50,000. Web applications: $25,000+. Cost depends on complexity, features, and design requirements.",
              },
              {
                q: "How long does it take to build a website?",
                a: "Simple websites: 2-4 weeks. Business websites: 4-8 weeks. E-commerce: 8-12 weeks. Complex web apps: 3-6 months. Timeline includes design, development, testing, and revisions.",
              },
              {
                q: "Do you provide website hosting?",
                a: "Yes, we provide hosting on Vercel, AWS, or your preferred platform. Includes SSL certificates, CDN, automatic backups, and 99.9% uptime guarantee.",
              },
              {
                q: "Will my website be mobile-friendly?",
                a: "Absolutely. All our websites are mobile-first and fully responsive. They work perfectly on phones, tablets, and desktops with optimized touch interactions.",
              },
              {
                q: "Can you redesign my existing website?",
                a: "Yes, we specialize in website modernization. We'll improve design, performance, SEO, and user experience while preserving your content and rankings.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-gray-900/30 border border-gray-800 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free consultation and detailed project quote
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:scale-105 transition-transform"
          >
            Start Your Project
          </Link>
        </section>
      </div>
    </div>
  );
}
