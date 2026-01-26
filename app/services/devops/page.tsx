import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DevOps Services - CI/CD, Automation, Infrastructure | Stryxon",
  description:
    "Professional DevOps services including CI/CD pipelines, infrastructure automation, Docker, Kubernetes, monitoring, and cloud deployment automation.",
  keywords: [
    "DevOps services",
    "CI/CD pipeline",
    "infrastructure automation",
    "Docker",
    "Kubernetes",
    "DevOps consulting",
    "deployment automation",
    "infrastructure as code",
    "DevOps engineer",
    "continuous integration",
  ],
  alternates: { canonical: "https://www.stryxon.com/services/devops" },
};

export default function DevOpsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            DevOps Services
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Accelerate your development with CI/CD pipelines, infrastructure
            automation, and modern DevOps practices. Deploy faster, safer, and
            more reliably.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-orange-400">
            DevOps Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "CI/CD Pipelines",
                description:
                  "Automated build, test, and deployment pipelines with GitHub Actions, GitLab CI, Jenkins, and CircleCI.",
              },
              {
                title: "Infrastructure as Code",
                description:
                  "Automate infrastructure with Terraform, CloudFormation, and Ansible. Version-controlled, repeatable deployments.",
              },
              {
                title: "Container Orchestration",
                description:
                  "Docker containerization and Kubernetes orchestration. Microservices architecture and service mesh.",
              },
              {
                title: "Monitoring & Logging",
                description:
                  "Complete observability with Prometheus, Grafana, ELK Stack, Datadog, and New Relic.",
              },
              {
                title: "Cloud Automation",
                description:
                  "Automate AWS, Azure, GCP deployments. Auto-scaling, load balancing, and cost optimization.",
              },
              {
                title: "Security & Compliance",
                description:
                  "DevSecOps practices, security scanning, vulnerability management, and compliance automation.",
              },
              {
                title: "Database DevOps",
                description:
                  "Database migrations, backup automation, replication, and performance optimization.",
              },
              {
                title: "GitOps Workflow",
                description:
                  "Git-based deployment workflows with ArgoCD and Flux. Declarative infrastructure management.",
              },
              {
                title: "Site Reliability Engineering",
                description:
                  "SRE practices, incident management, on-call rotation, and reliability engineering.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-gray-900/50 border border-orange-500/20 rounded-xl p-6 hover:border-orange-500/40 transition-all"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-orange-400">
            DevOps Tools & Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Docker",
              "Kubernetes",
              "Terraform",
              "Ansible",
              "GitHub Actions",
              "GitLab CI",
              "Jenkins",
              "AWS",
              "Azure DevOps",
              "Prometheus",
              "Grafana",
              "ELK Stack",
              "ArgoCD",
              "Helm",
              "CloudFormation",
              "Pulumi",
            ].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 bg-orange-600/20 border border-orange-500/30 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-orange-400">
            DevOps Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🚀",
                title: "Faster Deployment",
                description:
                  "Deploy 10x faster with automated CI/CD pipelines. From commit to production in minutes.",
              },
              {
                icon: "🛡️",
                title: "Increased Reliability",
                description:
                  "Reduce downtime by 90% with automated testing, monitoring, and rollback capabilities.",
              },
              {
                icon: "💰",
                title: "Cost Reduction",
                description:
                  "Save 30-50% on infrastructure costs through automation and resource optimization.",
              },
              {
                icon: "🔒",
                title: "Enhanced Security",
                description:
                  "Implement security best practices automatically. Vulnerability scanning and compliance checks.",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/20 rounded-xl p-8"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">
            Accelerate Your Development
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free DevOps assessment and improvement plan
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-full hover:scale-105 transition-transform"
          >
            Get DevOps Consultation
          </Link>
        </section>
      </div>
    </div>
  );
}
