import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import {
  Code,
  Network,
  Webhook,
  Key,
  Shield,
  Zap,
  Database,
  FileCode,
  CheckCircle,
  Activity,
  Lock,
  Server,
} from "lucide-react";

export const metadata: Metadata = {
  title: "API Development & Integration Services | Stryxon Technologies",
  description:
    "Professional API development and integration services including RESTful APIs, GraphQL, microservices, third-party integrations, and API consulting.",
  keywords: [
    "API development",
    "REST API",
    "GraphQL API",
    "API integration",
    "microservices",
    "API consulting",
    "backend development",
    "API design",
    "API security",
    "third-party integration",
  ],
  alternates: { canonical: "https://www.stryxon.com/services/api-development" },
  openGraph: {
    title: "API Development & Integration Services",
    description:
      "Build scalable APIs and integrate third-party services seamlessly. RESTful APIs, GraphQL, and microservices.",
    url: "https://www.stryxon.com/services/api-development",
  },
};

// API endpoint visualization
function APIEndpointMockup() {
  return (
    <div className="border border-zinc-800 bg-black font-mono text-xs">
      <div className="border-b border-zinc-800 px-4 py-2 flex items-center gap-3">
        <Code className="w-3 h-3 text-cyan-400" />
        <span className="text-zinc-500">API Documentation</span>
      </div>
      <div className="p-4 space-y-4">
        {/* GET endpoint */}
        <div className="border border-zinc-800 p-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-green-600 text-white text-[10px] font-bold">
              GET
            </span>
            <span className="text-cyan-400">/api/v1/users</span>
          </div>
          <div className="text-zinc-600 text-[10px] mb-2">
            Retrieve all users
          </div>
          <div className="bg-zinc-950 border border-zinc-800 p-2">
            <div className="text-green-400 text-[9px]">
              &#123;
              <br />
              &nbsp;&nbsp;"users": [&#123; "id": 1, "name": "John" &#125;],
              <br />
              &nbsp;&nbsp;"total": 1<br />
              &#125;
            </div>
          </div>
        </div>

        {/* POST endpoint */}
        <div className="border border-zinc-800 p-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-blue-600 text-white text-[10px] font-bold">
              POST
            </span>
            <span className="text-cyan-400">/api/v1/users</span>
          </div>
          <div className="text-zinc-600 text-[10px]">Create new user</div>
        </div>

        {/* DELETE endpoint */}
        <div className="border border-zinc-800 p-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-red-600 text-white text-[10px] font-bold">
              DELETE
            </span>
            <span className="text-cyan-400">/api/v1/users/:id</span>
          </div>
          <div className="text-zinc-600 text-[10px]">Delete user by ID</div>
        </div>

        {/* Status */}
        <div className="pt-3 border-t border-zinc-800 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-zinc-600 text-[10px]">
            API Status: Operational
          </span>
        </div>
      </div>
    </div>
  );
}

export default function APIDevelopmentPage() {
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto border-l border-r border-zinc-800">
          {/* Hero */}
          <section className="grid lg:grid-cols-2 border-b border-zinc-800">
            <div className="p-12 lg:p-16 border-r border-zinc-800 flex flex-col justify-center">
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
                API Development
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                  Scalable.
                  <br />
                  Secure.
                  <br />
                  RESTful.
                </span>
              </h1>
              <p className="text-lg text-zinc-400 mb-8 max-w-xl">
                Build enterprise-grade APIs with rock-solid architecture.
                RESTful, GraphQL, and microservices that handle millions of
                requests with sub-100ms response times.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold border border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  Build Your API
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
              <APIEndpointMockup />
            </div>
          </section>

          {/* Metrics */}
          <section className="grid grid-cols-2 lg:grid-cols-4 border-b border-zinc-800">
            {[
              { value: "<50ms", label: "Response Time" },
              { value: "99.99%", label: "Uptime SLA" },
              { value: "10M+", label: "Requests/Day" },
              { value: "256-bit", label: "Encryption" },
            ].map((metric, i) => (
              <div
                key={i}
                className={`p-8 text-center border-r border-b border-zinc-800 hover:bg-gradient-to-br hover:from-cyan-900/10 hover:to-teal-900/10 transition-all ${
                  i === 3 ? "border-r-0" : ""
                }`}
              >
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </section>

          {/* Examples First (Shuffled) */}
          <section className="p-12 lg:p-16 border-b border-zinc-800 bg-zinc-950/50">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
              Integration Examples
            </div>
            <h2 className="text-3xl font-bold mb-12">
              Popular API Integrations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Stripe", category: "Payments" },
                { name: "Twilio", category: "SMS/Voice" },
                { name: "SendGrid", category: "Email" },
                { name: "AWS S3", category: "Storage" },
                { name: "Salesforce", category: "CRM" },
                { name: "HubSpot", category: "Marketing" },
                { name: "Slack", category: "Communication" },
                { name: "Google Maps", category: "Location" },
              ].map((integration, i) => (
                <div
                  key={i}
                  className="p-4 border border-zinc-800 hover:border-cyan-500/50 hover:bg-cyan-900/10 transition-all"
                >
                  <div className="font-semibold text-white mb-1">
                    {integration.name}
                  </div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">
                    {integration.category}
                  </div>
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
                Enterprise API Architecture
              </h2>
              <p className="text-lg text-zinc-400 mb-4">
                We architect APIs that scale from MVP to enterprise. Clean
                RESTful design, GraphQL flexibility, or microservices
                distribution—we choose the right pattern for your use case and
                growth trajectory.
              </p>
              <p className="text-lg text-zinc-400">
                Every API includes authentication (OAuth 2.0/JWT), rate
                limiting, comprehensive documentation, automated testing, and
                monitoring dashboards. Production-ready from day one.
              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 border-b border-zinc-800">
            {[
              {
                icon: <Code className="w-6 h-6" />,
                title: "RESTful API Development",
                description:
                  "Build scalable REST APIs with Node.js, Express, FastAPI. JSON responses, versioning, and comprehensive documentation.",
              },
              {
                icon: <Network className="w-6 h-6" />,
                title: "GraphQL API Development",
                description:
                  "Modern GraphQL APIs with Apollo Server. Single endpoint, flexible queries, and real-time subscriptions.",
              },
              {
                icon: <Server className="w-6 h-6" />,
                title: "Microservices Architecture",
                description:
                  "Break monoliths into microservices. Service mesh, API gateway, and inter-service communication.",
              },
              {
                icon: <Webhook className="w-6 h-6" />,
                title: "Third-Party Integration",
                description:
                  "Integrate Stripe, PayPal, Twilio, SendGrid, Salesforce, HubSpot, and 100+ third-party services.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Webhook Development",
                description:
                  "Build and consume webhooks for real-time notifications. Event-driven architecture implementation.",
              },
              {
                icon: <FileCode className="w-6 h-6" />,
                title: "API Documentation",
                description:
                  "Comprehensive API docs with Swagger/OpenAPI, Postman collections, and interactive examples.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "API Security",
                description:
                  "OAuth 2.0, JWT authentication, rate limiting, input validation, and API key management.",
              },
              {
                icon: <Activity className="w-6 h-6" />,
                title: "API Testing",
                description:
                  "Automated API testing with Jest, Mocha, Postman. Load testing and performance benchmarking.",
              },
              {
                icon: <Lock className="w-6 h-6" />,
                title: "API Monitoring",
                description:
                  "Monitor API health, performance, errors, and usage with real-time dashboards and alerts.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-8 border-r border-b border-zinc-800 hover:bg-gradient-to-br hover:from-cyan-900/10 hover:to-teal-900/10 transition-all group"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
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
            <h2 className="text-3xl font-bold mb-8">API Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Node.js",
                "Express",
                "NestJS",
                "GraphQL",
                "Apollo",
                "FastAPI",
                "Django",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "OAuth 2.0",
                "JWT",
                "Swagger",
                "Postman",
                "REST",
                "WebSockets",
                "Docker",
                "Kubernetes",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 border border-zinc-800 text-sm font-mono hover:border-cyan-500/50 hover:bg-cyan-900/10 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Pricing Before Process (Shuffled) */}
          <section
            id="pricing"
            className="p-12 lg:p-16 border-b border-zinc-800"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
              Investment
            </div>
            <h2 className="text-3xl font-bold mb-12">
              API Development Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "REST API MVP",
                  price: "$8,000",
                  timeline: "3-4 weeks",
                  features: [
                    "5-10 endpoints",
                    "Authentication (JWT)",
                    "Database integration",
                    "API documentation",
                    "Basic monitoring",
                  ],
                },
                {
                  name: "Full API Platform",
                  price: "$20,000",
                  timeline: "6-8 weeks",
                  features: [
                    "20+ endpoints",
                    "GraphQL support",
                    "Third-party integrations",
                    "Rate limiting & caching",
                    "Advanced monitoring",
                  ],
                  featured: true,
                },
                {
                  name: "Microservices",
                  price: "$40,000+",
                  timeline: "10-12 weeks",
                  features: [
                    "Multi-service architecture",
                    "API gateway",
                    "Service mesh",
                    "Load balancing",
                    "Enterprise security",
                  ],
                },
              ].map((pkg, i) => (
                <div
                  key={i}
                  className={`p-8 border ${
                    pkg.featured
                      ? "border-cyan-500 bg-gradient-to-br from-cyan-900/10 to-teal-900/10"
                      : "border-zinc-800"
                  }`}
                >
                  <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-3">
                    {pkg.name}
                  </div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    {pkg.price}
                  </div>
                  <div className="text-sm text-zinc-400 mb-6">
                    {pkg.timeline}
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="p-12 lg:p-16 border-b border-zinc-800 bg-zinc-950/50">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
              Methodology
            </div>
            <h2 className="text-3xl font-bold mb-12">
              API Development Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  phase: "Week 1",
                  title: "API Design",
                  description:
                    "Endpoint planning, data models, authentication strategy, and API documentation structure.",
                },
                {
                  phase: "Week 2-3",
                  title: "Development",
                  description:
                    "Endpoint implementation, database setup, authentication, validation, and error handling.",
                },
                {
                  phase: "Week 4",
                  title: "Testing & Security",
                  description:
                    "Automated testing, security audit, load testing, and performance optimization.",
                },
                {
                  phase: "Week 5",
                  title: "Deployment",
                  description:
                    "Production deployment, monitoring setup, documentation finalization, and team training.",
                },
              ].map((step, i) => (
                <div key={i} className="border border-zinc-800 p-6">
                  <div className="font-mono text-xs text-cyan-400 mb-3">
                    {step.phase}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-zinc-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Guarantee */}
          <section className="p-12 lg:p-16 border-b border-zinc-800">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
              Commitment
            </div>
            <h2 className="text-3xl font-bold mb-8">
              API Development Guarantee
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Sub-100ms average response time",
                "99.99% uptime SLA",
                "Complete API documentation",
                "OAuth 2.0 & JWT security",
                "Automated testing suite included",
                "30-day post-launch support",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 border border-zinc-800"
                >
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="p-12 lg:p-16 border-b border-zinc-800 bg-zinc-950/50">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
              FAQ
            </div>
            <h2 className="text-3xl font-bold mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl space-y-8">
              {[
                {
                  q: "Should I choose REST or GraphQL?",
                  a: "REST is simpler and better for public APIs with clear resource patterns. GraphQL is ideal for complex data requirements, mobile apps, and when you need flexible queries. We recommend REST for most MVPs, GraphQL for data-intensive applications.",
                },
                {
                  q: "How do you handle API security?",
                  a: "We implement OAuth 2.0 or JWT authentication, rate limiting, input validation, SQL injection prevention, CORS configuration, and HTTPS encryption. All APIs include security audits and penetration testing.",
                },
                {
                  q: "What about API documentation?",
                  a: "Every API includes Swagger/OpenAPI interactive documentation, Postman collections, code examples in multiple languages, and integration guides. Documentation updates automatically as the API evolves.",
                },
                {
                  q: "Can you integrate with third-party APIs?",
                  a: "Yes, we integrate with 100+ services including Stripe, Twilio, SendGrid, Salesforce, HubSpot, AWS, Google Cloud, and custom enterprise APIs. Full error handling and retry logic included.",
                },
                {
                  q: "How do you ensure API performance?",
                  a: "We use caching (Redis), database query optimization, CDN for static assets, load balancing, and horizontal scaling. Load testing ensures your API handles peak traffic without degradation.",
                },
              ].map((faq, i) => (
                <div key={i} className="border-b border-zinc-800 pb-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.q}</h3>
                  <p className="text-base text-zinc-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="p-12 lg:p-16 text-center border-b border-zinc-800">
            <h2 className="text-4xl font-bold mb-4">Need Custom APIs?</h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Get a free API architecture consultation and development roadmap
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold border border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-lg"
            >
              Discuss Your API Project
            </Link>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
