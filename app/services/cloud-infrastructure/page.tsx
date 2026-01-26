import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Cloud Infrastructure Services - AWS, Azure, Google Cloud | Stryxon Technologies",
  description:
    "Expert cloud infrastructure services including AWS, Azure, Google Cloud deployment, serverless architecture, cloud migration, DevOps automation, and scalable cloud solutions. White-label cloud infrastructure partner.",
  keywords: [
    "cloud infrastructure services",
    "AWS cloud services",
    "Azure cloud solutions",
    "Google Cloud Platform",
    "cloud migration services",
    "serverless architecture",
    "cloud computing services",
    "cloud deployment",
    "infrastructure as code",
    "cloud automation",
    "Kubernetes services",
    "Docker containerization",
    "cloud security services",
    "cloud cost optimization",
    "multi-cloud architecture",
  ],
  alternates: {
    canonical: "https://www.stryxon.com/services/cloud-infrastructure",
  },
  openGraph: {
    title: "Cloud Infrastructure Services - AWS, Azure, Google Cloud",
    description:
      "Enterprise cloud infrastructure solutions with AWS, Azure, and Google Cloud. Scalable, secure, and cost-effective cloud deployment services.",
    url: "https://www.stryxon.com/services/cloud-infrastructure",
  },
};

export default function CloudInfrastructurePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cloud Infrastructure Services",
    description:
      "Enterprise cloud infrastructure solutions including AWS, Azure, Google Cloud deployment, serverless architecture, cloud migration, and DevOps automation.",
    provider: {
      "@type": "Organization",
      name: "Stryxon Technologies",
      url: "https://www.stryxon.com",
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cloud Infrastructure Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AWS Cloud Services",
            description:
              "Complete AWS infrastructure setup including EC2, Lambda, S3, RDS, CloudFront, and more",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Azure Cloud Solutions",
            description:
              "Microsoft Azure infrastructure deployment and management",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Google Cloud Platform",
            description: "GCP infrastructure setup and optimization",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cloud Migration",
            description:
              "Seamless migration from on-premise to cloud infrastructure",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cloud Infrastructure Services
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade cloud infrastructure on AWS, Azure, and Google
              Cloud Platform. Scalable, secure, and cost-optimized cloud
              solutions for modern businesses.
            </p>
          </div>

          {/* Key Services */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-indigo-400">
              Our Cloud Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "AWS Cloud Services",
                  description:
                    "Complete AWS infrastructure including EC2, Lambda, S3, RDS, CloudFront, ECS, EKS, and more. Certified AWS experts.",
                  keywords: "EC2, Lambda, S3, RDS, CloudFront",
                },
                {
                  title: "Azure Cloud Solutions",
                  description:
                    "Microsoft Azure deployment with App Services, Azure Functions, Cosmos DB, Azure Storage, and AKS.",
                  keywords: "App Services, Azure Functions, AKS",
                },
                {
                  title: "Google Cloud Platform",
                  description:
                    "GCP infrastructure with Compute Engine, Cloud Functions, Cloud Storage, BigQuery, and GKE.",
                  keywords: "Compute Engine, Cloud Functions, GKE",
                },
                {
                  title: "Serverless Architecture",
                  description:
                    "Build scalable applications with AWS Lambda, Azure Functions, Google Cloud Functions. Pay only for what you use.",
                  keywords: "Lambda, Functions, Serverless",
                },
                {
                  title: "Cloud Migration Services",
                  description:
                    "Migrate from on-premise to cloud or between cloud providers with zero downtime. Assessment, planning, and execution.",
                  keywords: "Migration, On-premise, Hybrid Cloud",
                },
                {
                  title: "Infrastructure as Code",
                  description:
                    "Automated infrastructure deployment with Terraform, CloudFormation, ARM templates, and Pulumi.",
                  keywords: "Terraform, IaC, CloudFormation",
                },
                {
                  title: "Container Orchestration",
                  description:
                    "Kubernetes (EKS, AKS, GKE), Docker Swarm, and container registry management for microservices.",
                  keywords: "Kubernetes, Docker, Containers",
                },
                {
                  title: "Cloud Security",
                  description:
                    "Security best practices including IAM, VPC, encryption, compliance (SOC 2, HIPAA, GDPR), and monitoring.",
                  keywords: "Security, Compliance, Encryption",
                },
                {
                  title: "Cost Optimization",
                  description:
                    "Reduce cloud costs by 30-50% through rightsizing, reserved instances, spot instances, and auto-scaling.",
                  keywords: "Cost Reduction, Optimization",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/40 transition-all"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className="text-sm text-indigo-400">
                    {service.keywords}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-indigo-400">
              Cloud Technologies We Use
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "AWS EC2",
                "AWS Lambda",
                "AWS S3",
                "AWS RDS",
                "AWS CloudFront",
                "AWS ECS",
                "AWS EKS",
                "Azure App Service",
                "Azure Functions",
                "Azure AKS",
                "Azure Cosmos DB",
                "Google Cloud Run",
                "Google Cloud Functions",
                "GKE",
                "BigQuery",
                "Terraform",
                "Docker",
                "Kubernetes",
                "Ansible",
                "CloudFormation",
                "Redis",
                "PostgreSQL",
                "MongoDB",
                "Nginx",
                "CloudFlare",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-indigo-400">
              Why Choose Our Cloud Services?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">🚀 Scalability</h3>
                <p className="text-gray-300">
                  Auto-scaling infrastructure that grows with your business.
                  Handle traffic spikes from 100 to 1M users seamlessly.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">🔒 Security</h3>
                <p className="text-gray-300">
                  Enterprise-grade security with encryption, compliance
                  certifications, DDoS protection, and 24/7 monitoring.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-500/20 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  💰 Cost Efficiency
                </h3>
                <p className="text-gray-300">
                  Reduce costs by 30-50% through optimization, reserved
                  instances, and efficient resource allocation.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/20 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">⚡ Performance</h3>
                <p className="text-gray-300">
                  99.99% uptime SLA, global CDN, sub-100ms response times, and
                  optimized database queries.
                </p>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-indigo-400">
              Our Cloud Implementation Process
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Discovery & Assessment",
                  description:
                    "Analyze current infrastructure, requirements, and goals. Create cloud migration roadmap.",
                },
                {
                  step: "2",
                  title: "Architecture Design",
                  description:
                    "Design scalable, secure cloud architecture. Select optimal services and pricing models.",
                },
                {
                  step: "3",
                  title: "Implementation",
                  description:
                    "Deploy infrastructure using IaC. Configure security, networking, and monitoring.",
                },
                {
                  step: "4",
                  title: "Migration & Testing",
                  description:
                    "Migrate applications with zero downtime. Comprehensive testing and validation.",
                },
                {
                  step: "5",
                  title: "Optimization",
                  description:
                    "Performance tuning, cost optimization, and security hardening.",
                },
                {
                  step: "6",
                  title: "Ongoing Support",
                  description:
                    "24/7 monitoring, maintenance, updates, and scaling as needed.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-6 items-start bg-gray-900/30 border border-gray-800 rounded-xl p-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-2xl font-bold">
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

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-indigo-400">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Which cloud provider should I choose - AWS, Azure, or Google Cloud?",
                  a: "It depends on your specific needs. AWS has the most comprehensive services and market share. Azure integrates well with Microsoft products. Google Cloud excels in data analytics and machine learning. We recommend AWS for most projects due to maturity and ecosystem, but can implement on any platform based on your requirements.",
                },
                {
                  q: "How much does cloud infrastructure cost?",
                  a: "Cloud costs vary based on usage. Small applications start at $100-500/month. Medium applications: $1,000-5,000/month. Enterprise solutions: $10,000+/month. We implement cost optimization strategies to reduce expenses by 30-50% through reserved instances, rightsizing, and auto-scaling.",
                },
                {
                  q: "How long does cloud migration take?",
                  a: "Simple migrations: 2-4 weeks. Complex enterprise migrations: 2-6 months. We create detailed migration plans with minimal downtime. Most migrations happen in phases to reduce risk and ensure business continuity.",
                },
                {
                  q: "Is cloud infrastructure secure?",
                  a: "Yes, cloud infrastructure is typically more secure than on-premise solutions. Cloud providers invest billions in security. We implement additional layers including encryption, IAM, VPC isolation, DDoS protection, and compliance certifications (SOC 2, HIPAA, GDPR).",
                },
                {
                  q: "What is serverless architecture and should I use it?",
                  a: "Serverless lets you run code without managing servers. You pay only for execution time. Benefits: lower costs, automatic scaling, no server maintenance. Ideal for APIs, event-driven applications, and variable workloads. We recommend serverless for 70% of modern applications.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-900/30 border border-gray-800 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free cloud infrastructure consultation and quote
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/#speed-checker"
                className="px-8 py-4 bg-gray-800 border border-indigo-500/30 text-white font-semibold rounded-full hover:bg-gray-700 transition-all"
              >
                Check Your Speed
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
