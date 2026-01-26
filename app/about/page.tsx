import type { Metadata } from "next";
import { Timeline } from "@/components/ui/timeline";
import { Cloud, Cpu, Code, Smartphone, Zap, Database } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Stryxon Technologies - White-Label Web Development Partner",
  description:
    "Learn about Stryxon Technologies, a leading white-label web development agency specializing in cloud infrastructure, AI agents, and custom software solutions for agencies worldwide.",
  alternates: {
    canonical: "https://www.stryxon.com/about",
  },
};

const timelineData = [
  {
    title: "Cloud Infrastructure",
    content: (
      <div>
        <p className="text-gray-300 text-sm md:text-base font-normal mb-4">
          Enterprise-grade cloud solutions on AWS, Azure, and Google Cloud
          Platform. Immutable infrastructure deployments with serverless
          architecture and containerization.
        </p>
        <div className="mb-6">
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm mb-2">
            <Cloud className="w-4 h-4 text-indigo-400" />
            AWS, Azure, Google Cloud Platform
          </div>
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm mb-2">
            <Zap className="w-4 h-4 text-indigo-400" />
            Serverless Architecture & Lambda Functions
          </div>
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm mb-2">
            <Database className="w-4 h-4 text-indigo-400" />
            Docker, Kubernetes, Terraform, IaC
          </div>
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm">
            <Code className="w-4 h-4 text-indigo-400" />
            CI/CD Pipelines & DevOps Automation
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=500&fit=crop"
            alt="Cloud infrastructure"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(99,102,241,0.15)]"
          />
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=500&fit=crop"
            alt="Server infrastructure"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(99,102,241,0.15)]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "AI Engineering",
    content: (
      <div>
        <p className="text-gray-300 text-sm md:text-base font-normal mb-4">
          Custom AI agents and machine learning solutions powered by GPT-4,
          Claude, and advanced ML models. Automation and intelligence for modern
          businesses.
        </p>
        <div className="mb-6">
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm mb-2">
            <Cpu className="w-4 h-4 text-purple-400" />
            ChatGPT & Claude Integration
          </div>
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm mb-2">
            <Zap className="w-4 h-4 text-purple-400" />
            Custom AI Agent Development
          </div>
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm mb-2">
            <Database className="w-4 h-4 text-purple-400" />
            Natural Language Processing (NLP)
          </div>
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm">
            <Code className="w-4 h-4 text-purple-400" />
            Machine Learning Model Training
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=500&fit=crop"
            alt="AI technology"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(168,85,247,0.15)]"
          />
          <Image
            src="https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=500&h=500&fit=crop"
            alt="Neural networks"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(168,85,247,0.15)]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Web Development",
    content: (
      <div>
        <p className="text-gray-300 text-sm md:text-base font-normal mb-4">
          Modern web applications built with Next.js, React, and cutting-edge
          frameworks. Lightning-fast, SEO-optimized, and scalable solutions.
        </p>
        <div className="mb-6">
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm mb-2">
            <Code className="w-4 h-4 text-blue-400" />
            Next.js 15 & React 19
          </div>
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm mb-2">
            <Zap className="w-4 h-4 text-blue-400" />
            TypeScript & TailwindCSS
          </div>
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm mb-2">
            <Database className="w-4 h-4 text-blue-400" />
            Progressive Web Apps (PWA)
          </div>
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm">
            <Cloud className="w-4 h-4 text-blue-400" />
            E-commerce & Custom Web Apps
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop"
            alt="Web development"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(59,130,246,0.15)]"
          />
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=500&fit=crop"
            alt="Coding"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(59,130,246,0.15)]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Mobile Development",
    content: (
      <div>
        <p className="text-gray-300 text-sm md:text-base font-normal mb-4">
          Native and cross-platform mobile applications for iOS and Android.
          Beautiful, performant apps that users love.
        </p>
        <div className="mb-6">
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm mb-2">
            <Smartphone className="w-4 h-4 text-green-400" />
            iOS & Android Native Development
          </div>
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm mb-2">
            <Code className="w-4 h-4 text-green-400" />
            React Native & Flutter
          </div>
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm mb-2">
            <Zap className="w-4 h-4 text-green-400" />
            Cross-Platform Solutions
          </div>
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm">
            <Cloud className="w-4 h-4 text-green-400" />
            App Store & Play Store Publishing
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=500&fit=crop"
            alt="Mobile development"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,197,94,0.15)]"
          />
          <Image
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=500&fit=crop"
            alt="Mobile apps"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,197,94,0.15)]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "DevOps",
    content: (
      <div>
        <p className="text-gray-300 text-sm md:text-base font-normal mb-4">
          Complete DevOps solutions with CI/CD pipelines, infrastructure
          automation, and monitoring. Deploy faster, more reliably.
        </p>
        <div className="mb-6">
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm mb-2">
            <Zap className="w-4 h-4 text-orange-400" />
            CI/CD Pipeline Setup
          </div>
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm mb-2">
            <Cloud className="w-4 h-4 text-orange-400" />
            Infrastructure as Code (IaC)
          </div>
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm mb-2">
            <Database className="w-4 h-4 text-orange-400" />
            Container Orchestration
          </div>
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm">
            <Code className="w-4 h-4 text-orange-400" />
            Monitoring & Security Automation
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&h=500&fit=crop"
            alt="DevOps"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(249,115,22,0.15)]"
          />
          <Image
            src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&h=500&fit=crop"
            alt="Infrastructure"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(249,115,22,0.15)]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "API Development",
    content: (
      <div>
        <p className="text-gray-300 text-sm md:text-base font-normal mb-4">
          Robust REST APIs, GraphQL endpoints, and microservices architecture.
          Scalable backend solutions for any application.
        </p>
        <div className="mb-6">
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm mb-2">
            <Database className="w-4 h-4 text-cyan-400" />
            RESTful API Design
          </div>
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm mb-2">
            <Code className="w-4 h-4 text-cyan-400" />
            GraphQL Implementation
          </div>
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm mb-2">
            <Cloud className="w-4 h-4 text-cyan-400" />
            Microservices Architecture
          </div>
          <div className="flex gap-2 items-center text-gray-400 text-xs md:text-sm">
            <Zap className="w-4 h-4 text-cyan-400" />
            Webhook & Third-Party Integration
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=500&fit=crop"
            alt="API development"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(6,182,212,0.15)]"
          />
          <Image
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&h=500&fit=crop"
            alt="Backend systems"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(6,182,212,0.15)]"
          />
        </div>
      </div>
    ),
  },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Stryxon Technologies offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stryxon Technologies offers white-label web development services including: custom web application development, cloud infrastructure deployment (AWS, Google Cloud, Azure), AI agent development and integration, API development and integration, serverless architecture implementation, DevOps consulting, web performance optimization, and technical consulting for agencies. We specialize in Next.js, React, Node.js, Python, and modern cloud technologies.",
        },
      },
      {
        "@type": "Question",
        name: "What is white-label web development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "White-label web development means Stryxon Technologies develops software solutions that agencies can rebrand and present as their own to their clients. We work behind the scenes as your technical partner, allowing you to scale your agency without hiring a full development team. All work is delivered under your brand name.",
        },
      },
      {
        "@type": "Question",
        name: "What industries does Stryxon Technologies serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stryxon Technologies serves digital agencies, marketing agencies, design studios, startups, SaaS companies, e-commerce businesses, and enterprises across various industries including healthcare, finance, education, real estate, and technology. We work with clients globally, providing technical solutions regardless of industry.",
        },
      },
      {
        "@type": "Question",
        name: "What is immutable cloud infrastructure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Immutable cloud infrastructure is an approach where servers are never modified after deployment. Instead of updating existing servers, we deploy entirely new servers with updates, then switch traffic to them. This ensures consistency, reliability, and easy rollback capabilities. It's a best practice for modern cloud deployments and significantly reduces downtime and deployment risks.",
        },
      },
      {
        "@type": "Question",
        name: "How can AI agents help my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Custom AI agents can automate repetitive tasks, provide 24/7 customer support, analyze data for insights, handle content generation, perform quality assurance testing, manage workflow automation, and integrate with existing systems. Stryxon develops AI agents tailored to your specific business needs using technologies like OpenAI, Anthropic Claude, and custom machine learning models.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Stryxon Technologies use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use modern, proven technologies including: Next.js 15, React 19, TypeScript, Node.js, Python, TailwindCSS, PostgreSQL, MongoDB, Redis, AWS (Lambda, S3, CloudFront, ECS), Google Cloud Platform, Docker, Kubernetes, GitHub Actions, Vercel, and various AI/ML frameworks. We choose technologies based on project requirements and scalability needs.",
        },
      },
      {
        "@type": "Question",
        name: "How does Stryxon ensure website performance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We ensure optimal website performance through: server-side rendering (SSR), static site generation (SSG), image optimization, code splitting, lazy loading, CDN integration, database query optimization, caching strategies, performance monitoring, and regular audits using Google PageSpeed Insights, Lighthouse, and custom tools. Our speed checker tool analyzes website performance and provides actionable recommendations.",
        },
      },
      {
        "@type": "Question",
        name: "What is the typical project timeline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Project timelines vary based on complexity: simple websites (2-4 weeks), custom web applications (6-12 weeks), complex enterprise solutions (3-6 months). We provide detailed project timelines during consultation. Our agile development process includes weekly updates, milestone reviews, and continuous deployment for faster delivery.",
        },
      },
      {
        "@type": "Question",
        name: "How much do Stryxon's services cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pricing depends on project scope, complexity, and requirements. Typical ranges: website development ($5,000-$20,000), web applications ($15,000-$50,000+), AI agent development ($10,000-$30,000), cloud infrastructure setup ($3,000-$15,000). We offer both project-based and retainer pricing models. Contact us for a detailed quote based on your specific needs.",
        },
      },
      {
        "@type": "Question",
        name: "Does Stryxon provide ongoing support and maintenance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer comprehensive support and maintenance packages including: 24/7 monitoring, security updates, performance optimization, bug fixes, feature enhancements, backup management, and technical support. Maintenance packages start at $500/month depending on service level requirements.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-black text-white pt-20 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            About Stryxon Technologies
          </h1>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-indigo-400">
              Who We Are
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Stryxon Technologies is a premier white-label web development
              agency founded in 2020, specializing in cloud infrastructure, AI
              agents, and custom software solutions. We serve as the technical
              backbone for digital agencies, marketing firms, and businesses
              worldwide, enabling them to deliver cutting-edge technology
              solutions without building in-house development teams.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our team of expert engineers combines deep technical expertise
              with business acumen to deliver scalable, high-performance
              solutions. We've completed over 127 successful projects with a
              4.9/5 client satisfaction rating.
            </p>
          </section>
        </div>
      </div>

      {/* Timeline Services Section */}
      <Timeline data={timelineData} />

      <div className="bg-black text-white pt-12 px-6">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-indigo-400">
              Why Choose Stryxon?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 border border-indigo-500/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-400">
                  Senior developers with 10+ years of experience in modern web
                  technologies and cloud platforms.
                </p>
              </div>
              <div className="bg-gray-900/50 border border-indigo-500/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Scalable Solutions
                </h3>
                <p className="text-gray-400">
                  Architecture designed to handle growth from MVP to millions of
                  users without rewrites.
                </p>
              </div>
              <div className="bg-gray-900/50 border border-indigo-500/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Transparent Communication
                </h3>
                <p className="text-gray-400">
                  Weekly updates, milestone reviews, and direct access to
                  development team.
                </p>
              </div>
              <div className="bg-gray-900/50 border border-indigo-500/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Proven Track Record
                </h3>
                <p className="text-gray-400">
                  127+ successful projects with 4.9/5 client satisfaction rating
                  across industries.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-indigo-400">
              Technologies We Use
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "Python",
                "TailwindCSS",
                "PostgreSQL",
                "MongoDB",
                "AWS",
                "Google Cloud",
                "Docker",
                "Kubernetes",
                "Vercel",
                "GitHub Actions",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-indigo-400">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {jsonLd.mainEntity.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-900/30 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {faq.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4 text-indigo-400">
              Get Started
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Ready to scale your agency with enterprise-grade technical
              solutions? Contact us for a free consultation and project quote.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
            >
              Contact Us Today
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
