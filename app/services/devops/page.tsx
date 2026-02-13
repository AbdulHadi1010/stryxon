import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import { 
  Activity, 
  GitBranch, 
  Rocket, 
  Shield, 
  Zap, 
  Server,
  Lock,
  CheckCircle,
  Code,
  Container,
  Database,
  Settings
} from "lucide-react";

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
  openGraph: {
    title: "DevOps Services - CI/CD, Automation, Infrastructure",
    description: "Professional DevOps services including CI/CD pipelines, infrastructure automation, and cloud deployment.",
    url: "https://www.stryxon.com/services/devops",
  },
};

// Terminal mockup for DevOps pipeline
function PipelineMockup() {
  return (
    <div className="border border-zinc-800 bg-black font-mono text-xs">
      <div className="border-b border-zinc-800 px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-zinc-500">CI/CD Pipeline</span>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-3 h-3 text-green-400" />
          <span className="text-green-400">✓ Build completed</span>
          <span className="text-zinc-600">2.3s</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-3 h-3 text-green-400" />
          <span className="text-green-400">✓ Tests passed (243/243)</span>
          <span className="text-zinc-600">8.7s</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-3 h-3 text-green-400" />
          <span className="text-green-400">✓ Security scan passed</span>
          <span className="text-zinc-600">3.1s</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full border-2 border-orange-400 border-t-transparent animate-spin" />
          <span className="text-orange-400">→ Deploying to production...</span>
        </div>
        <div className="mt-3 pt-3 border-t border-zinc-800">
          <div className="text-zinc-500">Deploy URL:</div>
          <div className="text-blue-400">https://api.production.app</div>
        </div>
      </div>
    </div>
  );
}

export default function DevOpsPage() {
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto border-l border-r border-zinc-800">
          
          {/* Hero */}
          <section className="grid lg:grid-cols-2 border-b border-zinc-800">
            <div className="p-12 lg:p-16 border-r border-zinc-800 flex flex-col justify-center">
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
                DevOps Engineering
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Automate.<br />Deploy.<br />Scale.
                </span>
              </h1>
              <p className="text-lg text-zinc-400 mb-8 max-w-xl">
                Enterprise-grade CI/CD pipelines, infrastructure automation, and cloud orchestration. 
                Deploy 10x faster with zero-downtime deployments.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold border border-red-500 hover:shadow-lg hover:shadow-red-500/50 transition-all"
                >
                  Get DevOps Audit
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
              <PipelineMockup />
            </div>
          </section>

          {/* Metrics */}
          <section className="grid grid-cols-2 lg:grid-cols-4 border-b border-zinc-800">
            {[
              { value: "10x", label: "Faster Deployments" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "<5min", label: "Pipeline Runtime" },
              { value: "Zero", label: "Downtime Deploys" },
            ].map((metric, i) => (
              <div
                key={i}
                className={`p-8 text-center border-r border-b border-zinc-800 hover:bg-gradient-to-br hover:from-red-900/10 hover:to-orange-900/10 transition-all ${
                  i === 3 ? "border-r-0" : ""
                }`}
              >
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </section>

          {/* Description */}
          <section className="p-12 lg:p-16 border-b border-zinc-800">
            <div className="max-w-3xl">
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4">
                Overview
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Modern DevOps for High-Velocity Teams
              </h2>
              <p className="text-lg text-zinc-400 mb-4">
                We build automated CI/CD pipelines that eliminate manual deployments, reduce errors by 90%, 
                and enable your team to ship features 10x faster. From code commit to production in minutes, not days.
              </p>
              <p className="text-lg text-zinc-400">
                Infrastructure as Code, containerization, orchestration, monitoring, and security built-in from day one. 
                Works with AWS, Azure, GCP, or on-premise infrastructure.
              </p>
            </div>
          </section>

          {/* Tech Stack First (Shuffled) */}
          <section className="p-12 lg:p-16 border-b border-zinc-800 bg-zinc-950/50">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
              Technologies
            </div>
            <h2 className="text-3xl font-bold mb-8">DevOps Tools & Platforms</h2>
            <div className="flex flex-wrap gap-3">
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
                "GCP",
                "Prometheus",
                "Grafana",
                "ELK Stack",
                "ArgoCD",
                "Helm",
                "CloudFormation",
                "Pulumi",
                "Datadog",
                "New Relic",
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

          {/* Services Grid */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 border-b border-zinc-800">
            {[
              {
                icon: <GitBranch className="w-6 h-6" />,
                title: "CI/CD Pipelines",
                description: "Automated build, test, and deployment pipelines with GitHub Actions, GitLab CI, Jenkins, and CircleCI.",
              },
              {
                icon: <Code className="w-6 h-6" />,
                title: "Infrastructure as Code",
                description: "Automate infrastructure with Terraform, CloudFormation, and Ansible. Version-controlled deployments.",
              },
              {
                icon: <Container className="w-6 h-6" />,
                title: "Container Orchestration",
                description: "Docker containerization and Kubernetes orchestration. Microservices architecture and service mesh.",
              },
              {
                icon: <Activity className="w-6 h-6" />,
                title: "Monitoring & Logging",
                description: "Complete observability with Prometheus, Grafana, ELK Stack, Datadog, and New Relic.",
              },
              {
                icon: <Server className="w-6 h-6" />,
                title: "Cloud Automation",
                description: "Automate AWS, Azure, GCP deployments. Auto-scaling, load balancing, and cost optimization.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Security & Compliance",
                description: "DevSecOps practices, security scanning, vulnerability management, and compliance automation.",
              },
              {
                icon: <Database className="w-6 h-6" />,
                title: "Database DevOps",
                description: "Database migrations, backup automation, replication, and performance optimization.",
              },
              {
                icon: <Settings className="w-6 h-6" />,
                title: "GitOps Workflow",
                description: "Git-based deployment workflows with ArgoCD and Flux. Declarative infrastructure management.",
              },
              {
                icon: <Lock className="w-6 h-6" />,
                title: "Site Reliability Engineering",
                description: "SRE practices, incident management, on-call rotation, and reliability engineering.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-8 border-r border-b border-zinc-800 hover:bg-gradient-to-br hover:from-red-900/10 hover:to-orange-900/10 transition-all group"
              >
                <div className="text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-zinc-400">{service.description}</p>
              </div>
            ))}
          </section>

          {/* Benefits */}
          <section className="p-12 lg:p-16 border-b border-zinc-800">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
              Impact
            </div>
            <h2 className="text-3xl font-bold mb-12">Why DevOps Matters</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Rocket className="w-8 h-8" />,
                  title: "Faster Time to Market",
                  description: "Deploy 10x faster with automated CI/CD pipelines. Ship features in hours, not weeks.",
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Increased Reliability",
                  description: "Reduce downtime by 90% with automated testing, monitoring, and instant rollback capabilities.",
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Cost Reduction",
                  description: "Save 30-50% on infrastructure costs through automation and intelligent resource optimization.",
                },
                {
                  icon: <Lock className="w-8 h-8" />,
                  title: "Enhanced Security",
                  description: "Built-in security scanning, vulnerability detection, and compliance checks in every deployment.",
                },
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="p-6 border border-zinc-800 hover:border-orange-500/50 transition-all"
                >
                  <div className="text-orange-400 mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-zinc-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="p-12 lg:p-16 border-b border-zinc-800 bg-zinc-950/50">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
              Investment
            </div>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-6">DevOps Implementation</h2>
              <div className="mb-8">
                <div className="text-5xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    $15,000
                  </span>
                </div>
                <div className="text-zinc-400">Complete CI/CD setup with monitoring</div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Automated CI/CD pipeline setup",
                  "Infrastructure as Code implementation",
                  "Container orchestration (Docker/K8s)",
                  "Monitoring & alerting setup",
                  "Security scanning integration",
                  "Documentation & team training",
                  "4-6 week delivery timeline",
                  "30 days post-launch support",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/#contact"
                className="inline-block px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold border border-red-500 hover:shadow-lg hover:shadow-red-500/50 transition-all"
              >
                Start DevOps Transformation
              </Link>
            </div>
          </section>

          {/* Process */}
          <section className="p-12 lg:p-16 border-b border-zinc-800">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
              Methodology
            </div>
            <h2 className="text-3xl font-bold mb-12">Implementation Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  phase: "Week 1-2",
                  title: "Assessment & Planning",
                  description: "Current infrastructure audit, technology selection, pipeline design, and security review.",
                },
                {
                  phase: "Week 3-4",
                  title: "Implementation",
                  description: "CI/CD pipeline setup, IaC configuration, container orchestration, and monitoring integration.",
                },
                {
                  phase: "Week 5-6",
                  title: "Testing & Training",
                  description: "Load testing, security validation, team training, documentation, and knowledge transfer.",
                },
              ].map((step, i) => (
                <div key={i} className="border border-zinc-800 p-6">
                  <div className="font-mono text-xs text-orange-400 mb-3">{step.phase}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-zinc-400">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Guarantee */}
          <section className="p-12 lg:p-16 border-b border-zinc-800 bg-zinc-950/50">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
              Commitment
            </div>
            <h2 className="text-3xl font-bold mb-8">Our DevOps Guarantee</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "10x deployment speed increase or money back",
                "99.9% uptime SLA",
                "Zero-downtime deployment strategy",
                "Complete rollback capability",
                "30-day post-launch support included",
                "Full documentation & training",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 border border-zinc-800">
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="p-12 lg:p-16 border-b border-zinc-800">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
              FAQ
            </div>
            <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl space-y-8">
              {[
                {
                  q: "What's included in the DevOps implementation?",
                  a: "Complete CI/CD pipeline setup, infrastructure as code, container orchestration, monitoring/alerting, security scanning, and team training. Everything needed for automated deployments.",
                },
                {
                  q: "How long does DevOps implementation take?",
                  a: "Typically 4-6 weeks for a complete setup including testing and training. Timeline varies based on infrastructure complexity and team size.",
                },
                {
                  q: "Do you support AWS, Azure, and GCP?",
                  a: "Yes, we work with all major cloud providers (AWS, Azure, GCP) as well as on-premise infrastructure. We'll recommend the best fit for your needs.",
                },
                {
                  q: "What if our current infrastructure is complex?",
                  a: "We specialize in complex migrations. We'll assess your current setup, plan a phased approach, and ensure zero disruption to production systems.",
                },
                {
                  q: "Do you provide ongoing DevOps support?",
                  a: "Yes, we offer monthly retainer packages for ongoing DevOps support, optimization, and infrastructure management after the initial implementation.",
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
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Deployment Process?
            </h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Get a free DevOps assessment and custom implementation plan
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold border border-red-500 hover:shadow-lg hover:shadow-red-500/50 transition-all text-lg"
            >
              Schedule Free Consultation
            </Link>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
}
