import type { Metadata } from "next";
import Link from "next/link";

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
};

export default function APIDevelopmentPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            API Development & Integration
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Build scalable APIs and integrate third-party services seamlessly.
            RESTful APIs, GraphQL, microservices, and enterprise integrations.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400">
            API Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "RESTful API Development",
                description:
                  "Build scalable REST APIs with Node.js, Express, FastAPI. JSON/XML responses, versioning, and documentation.",
              },
              {
                title: "GraphQL API Development",
                description:
                  "Modern GraphQL APIs with Apollo Server. Single endpoint, flexible queries, and real-time subscriptions.",
              },
              {
                title: "Microservices Architecture",
                description:
                  "Break monoliths into microservices. Service mesh, API gateway, and inter-service communication.",
              },
              {
                title: "API Integration",
                description:
                  "Integrate Stripe, PayPal, Twilio, SendGrid, Salesforce, HubSpot, and 100+ third-party services.",
              },
              {
                title: "Webhook Development",
                description:
                  "Build and consume webhooks for real-time notifications. Event-driven architecture.",
              },
              {
                title: "API Documentation",
                description:
                  "Comprehensive API docs with Swagger/OpenAPI, Postman collections, and interactive examples.",
              },
              {
                title: "API Security",
                description:
                  "OAuth 2.0, JWT authentication, rate limiting, input validation, and API key management.",
              },
              {
                title: "API Testing",
                description:
                  "Automated API testing with Jest, Mocha, Postman. Load testing and performance benchmarking.",
              },
              {
                title: "API Monitoring",
                description:
                  "Monitor API health, performance, errors, and usage with real-time dashboards and alerts.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-gray-900/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400">
            API Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
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
            ].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 bg-cyan-600/20 border border-cyan-500/30 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">Need Custom APIs?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free API development consultation
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-full hover:scale-105 transition-transform"
          >
            Discuss Your API Project
          </Link>
        </section>
      </div>
    </div>
  );
}
