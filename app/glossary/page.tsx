import type { Metadata } from "next";
import Link from "next/link";
import {
  Book,
  Code,
  Cloud,
  Zap,
  Database,
  Layers,
  Cpu,
  Globe,
  FileCode,
  Gauge,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Guide to Modern Agency Infrastructure - Technical Glossary | Stryxon",
  description:
    "Comprehensive guide to modern web infrastructure terms for digital agencies. Learn about RAG AI, Headless CMS, Core Web Vitals, Infrastructure as Code, and more technical concepts that drive agency growth.",
  keywords: [
    "agency infrastructure guide",
    "web development glossary",
    "headless CMS explained",
    "Infrastructure as Code",
    "Core Web Vitals guide",
    "RAG AI definition",
    "serverless architecture",
    "white-label development terms",
    "modern web architecture",
    "agency technical knowledge base",
  ],
  alternates: {
    canonical: "https://www.stryxon.com/glossary",
  },
  openGraph: {
    title: "Guide to Modern Agency Infrastructure - Technical Glossary",
    description:
      "Essential technical terms and concepts for scaling digital agencies with modern web infrastructure.",
    url: "https://www.stryxon.com/glossary",
    type: "article",
  },
};

const glossaryTerms = [
  {
    icon: <Cpu className="w-8 h-8 text-indigo-400" />,
    term: "RAG AI (Retrieval-Augmented Generation)",
    slug: "rag-ai",
    definition: "What is RAG AI?",
    content:
      "RAG AI is an advanced artificial intelligence architecture that combines large language models (LLMs) with external knowledge retrieval systems. For digital agencies, RAG AI enables custom chatbots and support systems that can access your client's specific documentation, product catalogs, and knowledge bases in real-time. Unlike standard AI models with static training data, RAG systems dynamically retrieve relevant information before generating responses, ensuring accurate, up-to-date answers. Agencies implementing RAG AI see 60-80% reduction in customer support costs while improving response accuracy by 95%. This technology is particularly valuable for white-label AI solutions that need to serve multiple clients with distinct knowledge bases without retraining entire models.",
    benefits: [
      "Real-time access to current information without model retraining",
      "Reduced AI hallucinations through grounded fact retrieval",
      "Cost-effective scaling for multi-client agency deployments",
      "Custom knowledge bases per client without separate models",
    ],
    relatedTerms: ["AI Agents", "Serverless Architecture", "API Development"],
  },
  {
    icon: <FileCode className="w-8 h-8 text-purple-400" />,
    term: "Headless Next.js Architecture",
    slug: "headless-nextjs",
    definition: "What is Headless Next.js?",
    content:
      "Headless Next.js architecture decouples the frontend presentation layer (Next.js) from the backend content management system (CMS), creating a flexible, API-driven architecture. For agencies, this means building one powerful Next.js frontend that can serve multiple clients by connecting to different backend systems—WordPress, Contentful, Sanity, or custom APIs. The 'headless' approach delivers 40-60% faster page loads compared to traditional monolithic CMS platforms because the frontend is optimized purely for performance without CMS overhead. Agencies benefit from reusable component libraries, consistent branding across client projects, and the ability to swap backends without frontend rewrites. This architecture supports Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR), giving agencies maximum flexibility for different client needs while maintaining a single, scalable codebase.",
    benefits: [
      "3-5x faster page loads vs traditional WordPress/Drupal",
      "Single frontend codebase serves multiple client backends",
      "Superior SEO through automatic server-side rendering",
      "Freedom to change CMS without frontend rewrite",
    ],
    relatedTerms: [
      "Core Web Vitals",
      "Serverless Architecture",
      "API Development",
    ],
  },
  {
    icon: <Gauge className="w-8 h-8 text-blue-400" />,
    term: "Core Web Vitals",
    slug: "core-web-vitals",
    definition: "What are Core Web Vitals?",
    content:
      "Core Web Vitals are Google's standardized metrics for measuring real-world user experience: Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). For digital agencies, these metrics directly impact client ROI—every 100ms improvement in LCP can increase conversions by 1-2%. LCP measures loading performance (target: under 2.5s), FID measures interactivity (target: under 100ms), and CLS measures visual stability (target: under 0.1). Agencies optimizing for Core Web Vitals see 20-30% improvements in client conversion rates and better Google search rankings. Modern infrastructure like Next.js with edge caching, image optimization, and code splitting can achieve perfect 100/100 scores. Understanding and optimizing Core Web Vitals is essential for agencies competing on performance-based pricing models.",
    benefits: [
      "Direct correlation to conversion rates and revenue",
      "Improved Google search rankings and visibility",
      "Competitive advantage in agency pitches with proven metrics",
      "Client retention through measurable performance improvements",
    ],
    relatedTerms: [
      "Headless Next.js",
      "Edge Computing",
      "Serverless Architecture",
    ],
  },
  {
    icon: <Code className="w-8 h-8 text-green-400" />,
    term: "Infrastructure as Code (IaC)",
    slug: "infrastructure-as-code",
    definition: "What is Infrastructure as Code?",
    content:
      "Infrastructure as Code (IaC) is the practice of managing cloud infrastructure through code files (Terraform, AWS CloudFormation, Pulumi) instead of manual configuration. For agencies managing multiple client deployments, IaC is transformative—it enables spinning up identical production environments in minutes rather than days. With IaC, agencies can version control their entire infrastructure, replicate successful client setups instantly, and eliminate human configuration errors. A properly implemented IaC strategy reduces deployment time by 90% and infrastructure costs by 30-40% through automated resource optimization. Agencies using IaC can offer standardized, white-label infrastructure packages to clients while maintaining customization flexibility. This approach is critical for scaling agency operations without proportionally scaling DevOps headcount.",
    benefits: [
      "Deploy complete client environments in under 10 minutes",
      "Version control infrastructure alongside application code",
      "Eliminate manual configuration drift and errors",
      "Rapid disaster recovery through infrastructure redeployment",
    ],
    relatedTerms: [
      "Immutable Infrastructure",
      "DevOps",
      "Cloud Infrastructure",
    ],
  },
  {
    icon: <Cloud className="w-8 h-8 text-cyan-400" />,
    term: "Immutable Infrastructure",
    slug: "immutable-infrastructure",
    definition: "What is Immutable Infrastructure?",
    content:
      "Immutable Infrastructure is a deployment pattern where servers are never modified after creation—instead, entire new servers are deployed with updates, and old ones are terminated. For agencies, this approach eliminates the 'works on my machine' problem and configuration drift that plagues traditional server management. When a client needs an update, agencies deploy a fresh server with the new code, test it, and switch traffic over—if issues arise, rollback is instant because the old server is still available. This pattern reduces downtime by 95% and eliminates debugging sessions for environment-specific issues. Immutable infrastructure is the foundation of modern DevOps practices and enables agencies to confidently deploy multiple times per day. Combined with Infrastructure as Code, agencies can guarantee consistent, reliable deployments across all client projects.",
    benefits: [
      "Zero-downtime deployments with instant rollback capability",
      "Eliminates server configuration drift and debugging",
      "Predictable, repeatable deployments across all environments",
      "Enhanced security through automated patching and replacement",
    ],
    relatedTerms: [
      "Infrastructure as Code",
      "DevOps",
      "Serverless Architecture",
    ],
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    term: "Serverless Architecture",
    slug: "serverless-architecture",
    definition: "What is Serverless Architecture?",
    content:
      "Serverless architecture runs application code without managing servers, using cloud functions (AWS Lambda, Vercel Functions, Cloudflare Workers) that auto-scale and charge only for execution time. For agencies, serverless eliminates infrastructure management overhead—no servers to patch, no scaling to configure, no idle resource costs. A typical agency client with variable traffic (e.g., e-commerce with seasonal spikes) saves 40-70% on infrastructure costs because they only pay for actual usage. Serverless functions scale instantly from zero to thousands of concurrent executions, handling viral traffic without preparation. Agencies can deliver enterprise-grade scalability to small business clients at startup-friendly prices. The trade-off is cold start latency (50-500ms), but modern platforms have largely solved this for web applications. Serverless is ideal for APIs, background jobs, and event-driven workflows.",
    benefits: [
      "40-70% cost reduction through pay-per-execution pricing",
      "Automatic scaling from zero to millions of requests",
      "Zero server maintenance and security patching",
      "Rapid development cycles with function-as-a-service model",
    ],
    relatedTerms: ["Edge Computing", "API Development", "Cloud Infrastructure"],
  },
  {
    icon: <Globe className="w-8 h-8 text-pink-400" />,
    term: "Edge Computing and CDN",
    slug: "edge-computing",
    definition: "What is Edge Computing?",
    content:
      "Edge computing executes application logic at data centers geographically close to users, rather than in centralized cloud regions. For agencies serving global clients, edge computing reduces latency from 500-1000ms (intercontinental) to 20-50ms (local edge node). Modern platforms like Cloudflare Workers, Vercel Edge Functions, and AWS CloudFront Functions enable agencies to deploy compute globally without managing regional infrastructure. A Content Delivery Network (CDN) is the foundation—caching static assets at edge locations—but modern edge platforms now run dynamic code, databases, and full applications at the edge. Agencies implementing edge strategies see 60-80% reduction in Time to First Byte (TTFB) and dramatically improved Core Web Vitals scores. For client sites targeting international markets, edge deployment is non-negotiable for competitive user experience.",
    benefits: [
      "60-80% reduction in Time to First Byte for global users",
      "Improved Core Web Vitals and SEO rankings worldwide",
      "DDoS protection and enhanced security at edge layer",
      "Near-instant content delivery regardless of user location",
    ],
    relatedTerms: [
      "Core Web Vitals",
      "Serverless Architecture",
      "Headless Next.js",
    ],
  },
  {
    icon: <Database className="w-8 h-8 text-red-400" />,
    term: "Headless CMS",
    slug: "headless-cms",
    definition: "What is a Headless CMS?",
    content:
      "A Headless CMS provides content management capabilities through APIs without dictating frontend presentation, unlike traditional CMS platforms like WordPress that tightly couple content and presentation. For agencies, headless CMS platforms (Contentful, Sanity, Strapi, Directus) enable building one powerful frontend that can serve content to websites, mobile apps, digital signage, and IoT devices from a single content source. Agencies benefit from faster development cycles—frontend developers work independently from content editors—and superior performance since the frontend is optimized for speed without CMS overhead. Headless CMS solutions offer better security (no PHP vulnerabilities), easier scaling (API-driven architecture), and modern developer experience with GraphQL/REST APIs. The trade-off is initial setup complexity, but agencies gain a flexible content infrastructure that serves multiple channels and clients.",
    benefits: [
      "Omnichannel content delivery from single source",
      "3-5x faster frontend performance vs traditional CMS",
      "Improved security without PHP/server vulnerabilities",
      "Modern developer experience with API-first architecture",
    ],
    relatedTerms: ["Headless Next.js", "API Development", "JAMstack"],
  },
  {
    icon: <Layers className="w-8 h-8 text-orange-400" />,
    term: "Microservices Architecture",
    slug: "microservices",
    definition: "What is Microservices Architecture?",
    content:
      "Microservices architecture breaks applications into small, independent services that communicate through APIs, rather than building monolithic applications. For agencies managing complex client platforms (e-commerce + blog + booking system), microservices enable independent development, deployment, and scaling of each component. When a client's checkout service needs scaling during Black Friday, only that microservice scales—not the entire application—reducing costs by 50-70%. Microservices also enable polyglot development—using Node.js for APIs, Python for machine learning, Go for high-performance services—choosing the best tool for each job. The agency can deploy updates to the blog without touching the payment system, reducing deployment risk and enabling continuous delivery. The challenge is increased operational complexity, but container orchestration platforms (Kubernetes, AWS ECS) have made microservices management accessible to mid-sized agencies.",
    benefits: [
      "Independent scaling of high-traffic components saves 50-70% costs",
      "Deploy updates to individual services without full system deployment",
      "Technology flexibility—choose best tool for each service",
      "Improved fault isolation—one service failure doesn't crash everything",
    ],
    relatedTerms: ["API Development", "Serverless Architecture", "DevOps"],
  },
  {
    icon: <Book className="w-8 h-8 text-violet-400" />,
    term: "JAMstack Architecture",
    slug: "jamstack",
    definition: "What is JAMstack?",
    content:
      "JAMstack (JavaScript, APIs, Markup) is a modern web architecture that pre-renders pages at build time and serves them as static files from CDNs, with dynamic functionality added through JavaScript and APIs. For agencies, JAMstack delivers unmatched performance (50-500ms page loads), security (no servers to hack), and scalability (handles traffic spikes effortlessly). A typical agency blog or marketing site on JAMstack serves millions of pageviews for $5-20/month compared to $100-500/month for traditional hosting. JAMstack sites are immune to common attacks because there's no server-side code or database to exploit. Platforms like Vercel, Netlify, and Cloudflare Pages have made JAMstack deployment trivial—push to GitHub, automatic deployment, global CDN distribution. For client projects that don't need real-time server-side rendering, JAMstack offers the best performance-to-cost ratio available.",
    benefits: [
      "50-100x cost reduction vs traditional server hosting",
      "Perfect 100/100 Lighthouse scores achievable",
      "Inherently secure with no server-side attack surface",
      "Unlimited scalability through global CDN distribution",
    ],
    relatedTerms: ["Headless Next.js", "Headless CMS", "Edge Computing"],
  },
];

export default function GlossaryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Guide to Modern Agency Infrastructure",
    description:
      "Comprehensive glossary of technical terms for digital agencies implementing modern web infrastructure",
    publisher: {
      "@type": "Organization",
      name: "Stryxon Technologies",
      url: "https://www.stryxon.com",
    },
    hasDefinedTerm: glossaryTerms.map((term) => ({
      "@type": "DefinedTerm",
      name: term.term,
      description: term.content,
      inDefinedTermSet: "https://www.stryxon.com/glossary",
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Guide to Modern Agency Infrastructure
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Essential technical knowledge base for digital agencies scaling
              with modern web architecture. Understand the infrastructure
              concepts driving high-performance, white-label solutions.
            </p>
          </div>

          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-indigo-400">
                Why This Glossary Matters
              </h2>
              <p className="text-gray-300 mb-4">
                Modern digital agencies face a rapidly evolving technical
                landscape. Understanding these 10 foundational concepts enables
                agencies to:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">→</span>
                  <span>
                    Reduce infrastructure costs by 40-70% through modern
                    architecture patterns
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">→</span>
                  <span>
                    Deliver 3-5x faster websites with measurable Core Web Vitals
                    improvements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">→</span>
                  <span>
                    Scale technical operations without proportional headcount
                    increases
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">→</span>
                  <span>
                    Offer competitive white-label services with enterprise-grade
                    architecture
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Glossary Terms */}
          <div className="space-y-16">
            {glossaryTerms.map((term, index) => (
              <div key={term.slug} id={term.slug} className="scroll-mt-24">
                <div className="max-w-4xl mx-auto">
                  {/* Term Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 mt-1">{term.icon}</div>
                    <div className="flex-grow">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {term.term}
                      </h2>
                      <h3 className="text-xl text-indigo-400 font-semibold mb-4">
                        {term.definition}
                      </h3>
                    </div>
                  </div>

                  {/* Term Content */}
                  <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {term.content}
                    </p>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-indigo-400 mb-3">
                        Key Benefits for Agencies:
                      </h4>
                      <ul className="space-y-2">
                        {term.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-gray-400"
                          >
                            <span className="text-green-400 mt-1">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Related Terms */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Related Concepts:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {term.relatedTerms.map((related) => (
                          <span
                            key={related}
                            className="px-3 py-1 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-sm text-indigo-300"
                          >
                            {related}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Implement Modern Infrastructure?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Stryxon Technologies specializes in white-label implementation
                of these modern architecture patterns. Let us help your agency
                deliver enterprise-grade solutions without building an in-house
                infrastructure team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-transform"
                >
                  Schedule Technical Consultation
                </Link>
                <Link
                  href="/services/cloud-infrastructure"
                  className="px-8 py-4 bg-transparent border-2 border-indigo-500 text-indigo-400 font-semibold rounded-full hover:bg-indigo-500/10 transition-colors"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
