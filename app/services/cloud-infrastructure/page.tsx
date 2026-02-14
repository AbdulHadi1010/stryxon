import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import {
  ArrowRight,
  Server,
  Shield,
  Activity,
  Lock,
  Zap,
  Database,
  Network,
  Code,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Cloud Infrastructure | Multi-Region AWS & GCP | Stryxon",
  description:
    "Terraform-managed multi-region cloud infrastructure for high-traffic production systems. 99.99% uptime SLA, auto-scaling, zero-downtime deployments. Built for enterprises that can't afford failure.",
  keywords: [
    "enterprise cloud infrastructure",
    "multi-region AWS architecture",
    "Terraform infrastructure as code",
    "Kubernetes orchestration",
    "high availability infrastructure",
    "cloud infrastructure design",
    "auto-scaling cloud systems",
  ],
  alternates: {
    canonical: "https://www.stryxon.com/services/cloud-infrastructure",
  },
  openGraph: {
    title: "Enterprise Cloud Infrastructure | Multi-Region AWS & GCP",
    description:
      "Terraform-managed multi-region cloud infrastructure. 99.99% uptime, auto-scaling, zero-downtime deployments.",
    url: "https://www.stryxon.com/services/cloud-infrastructure",
  },
};

export default function CloudInfrastructurePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Enterprise Cloud Infrastructure",
    description:
      "Multi-region AWS & GCP infrastructure for high-traffic production systems. Terraform-managed, auto-scaling, 99.99% uptime SLA.",
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

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section - Left-aligned headline with terminal visualization */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="grid lg:grid-cols-2">
              {/* Left: Massive Headline */}
              <div className="p-16 lg:p-24 border-r border-b border-zinc-800 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="font-mono text-xs uppercase text-zinc-400 tracking-widest">
                    Infrastructure Engineering
                  </span>
                </div>
                <h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] mb-8">
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                    ENTERPRISE
                  </span>
                  <br />
                  <span className="text-white">CLOUD</span>
                  <br />
                  <span className="text-white">INFRASTRUCTURE</span>
                </h1>
                <p className="text-base text-zinc-400 leading-relaxed mb-12 max-w-lg">
                  Multi-region AWS & GCP architecture for high-traffic
                  production systems. Terraform-managed infrastructure-as-code,
                  zero-downtime deployments, 99.99% uptime SLA.
                </p>
                <div className="flex items-center">
                  <Link
                    href="/#contact?source=cloud-infrastructure-hero"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-medium uppercase tracking-widest hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/50"
                  >
                    Request Architecture Review
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right: Terminal Visualization */}
              <div className="p-16 lg:p-24 bg-zinc-950 border-r border-b border-zinc-800 flex items-center">
                <div className="w-full border border-zinc-800 bg-black">
                  {/* Terminal Header */}
                  <div className="border-b border-zinc-800 px-4 py-3 flex items-center">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 border border-zinc-800" />
                      <div className="w-3 h-3 border border-zinc-800" />
                      <div className="w-3 h-3 border border-zinc-800" />
                    </div>
                    <span className="ml-4 font-mono text-xs text-zinc-400">
                      terraform apply
                    </span>
                  </div>

                  {/* Terminal Content */}
                  <div className="p-6 font-mono text-xs">
                    <div className="space-y-1">
                      <div className="text-zinc-600">
                        $ terraform apply -auto-approve
                      </div>
                      <div className="text-zinc-400">
                        aws_vpc.main: Creating...
                      </div>
                      <div className="text-zinc-400">
                        aws_vpc.main: Creation complete [id=vpc-0a1b2c3d]
                      </div>
                      <div className="text-zinc-400">
                        aws_subnet.public_us_east_1a: Creating...
                      </div>
                      <div className="text-zinc-400">
                        aws_eks_cluster.main: Creating...
                      </div>
                      <div className="text-zinc-400">
                        aws_rds_instance.primary: Creating...
                      </div>
                      <div className="h-2" />
                      <div className="text-zinc-400">
                        Apply complete! Resources: 47 added, 0 changed, 0
                        destroyed.
                      </div>
                      <div className="h-4" />
                      <div className="text-white">
                        ✓ Multi-region deployment complete
                      </div>
                      <div className="text-white">✓ Auto-scaling enabled</div>
                      <div className="text-white">✓ 99.99% uptime achieved</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Bar - Blueprint Grid */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Uptime Guarantee", value: "99.99%" },
                { label: "Multi-Region", value: "3+ Zones" },
                { label: "Auto-Scaling", value: "Real-time" },
                { label: "Cost Savings", value: "40-60%" },
              ].map((metric, index) => (
                <div
                  key={index}
                  className="p-12 text-center border-r border-b border-zinc-800 hover:bg-gradient-to-br hover:from-indigo-900/20 hover:to-purple-900/20 transition-all group"
                >
                  <div className="font-mono text-xs uppercase text-zinc-400 tracking-widest mb-4 group-hover:text-purple-400 transition-colors">
                    {metric.label}
                  </div>
                  <div className="text-4xl font-medium tracking-tighter bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:p-24 border-r border-b border-zinc-800">
              <p className="text-lg text-zinc-400 leading-relaxed max-w-5xl">
                We architect fault-tolerant, auto-scaling cloud infrastructure
                for companies processing millions of requests per day.
                Terraform-managed infrastructure-as-code, zero-downtime
                deployments, and 99.99% uptime SLAs. Built for enterprises that
                can't afford downtime.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities Grid - 3x3 Perfect Blueprint Grid */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            {/* Section Header */}
            <div className="p-16 lg:px-24 lg:py-12 border-r border-b border-zinc-800">
              <h2 className="text-4xl font-medium tracking-tighter uppercase">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  Technical Capabilities
                </span>
              </h2>
            </div>

            {/* 3x3 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              {[
                {
                  icon: Network,
                  title: "Multi-Region Architecture",
                  description:
                    "Deploy across AWS us-east-1, eu-west-1, ap-southeast-1 with Route53 geo-routing, CloudFront CDN, automatic failover. Single region failure? Users never notice.",
                },
                {
                  icon: Code,
                  title: "Infrastructure as Code",
                  description:
                    "100% Terraform-managed. Every resource in Git. No manual console changes. Versioned, auditable, reproducible. Spin up staging in 8 minutes.",
                },
                {
                  icon: Server,
                  title: "Kubernetes Orchestration",
                  description:
                    "EKS/GKE clusters with Helm, HPA, cluster autoscaling, service mesh (Istio), zero-downtime rolling deployments. Handle 10x traffic spikes automatically.",
                },
                {
                  icon: Database,
                  title: "Database High Availability",
                  description:
                    "RDS Multi-AZ with read replicas, automated backups, point-in-time recovery. ElastiCache Redis. DynamoDB global tables. Sub-10ms latency globally.",
                },
                {
                  icon: Activity,
                  title: "Observability Stack",
                  description:
                    "Prometheus + Grafana for metrics, ELK for logs, Jaeger for distributed tracing, PagerDuty alerting. Know exactly what's happening 24/7.",
                },
                {
                  icon: Shield,
                  title: "Security & Compliance",
                  description:
                    "VPC isolation, security groups, IAM least-privilege, AWS Secrets Manager, WAF, GuardDuty threat detection. SOC 2 and HIPAA-ready architecture.",
                },
                {
                  icon: Zap,
                  title: "CI/CD Pipelines",
                  description:
                    "GitHub Actions with automated testing, Docker builds, security scanning (Snyk), blue-green deployments, automatic rollbacks. 20+ deploys/day safely.",
                },
                {
                  icon: Lock,
                  title: "Cost Optimization",
                  description:
                    "Reserved instances, Spot for batch jobs, S3 lifecycle policies, CloudWatch cost anomaly detection. Typical savings: 40-60% vs defaults.",
                },
                {
                  icon: Server,
                  title: "Disaster Recovery",
                  description:
                    "Automated backups to S3 Glacier, cross-region replication, tested recovery runbooks. RTO <4hrs, RPO <15min. Data survives AWS region outages.",
                },
              ].map((capability, index) => {
                const Icon = capability.icon;
                const isRightMost = (index + 1) % 3 === 0;
                const isBottomRow = index >= 6;

                return (
                  <div
                    key={index}
                    className={`p-12 hover:bg-gradient-to-br hover:from-indigo-900/20 hover:to-purple-900/20 transition-all cursor-default group ${
                      !isRightMost ? "border-r border-zinc-800" : ""
                    } ${!isBottomRow ? "border-b border-zinc-800" : "border-b border-zinc-800"}`}
                  >
                    <Icon
                      className="w-6 h-6 text-purple-400 mb-8 group-hover:text-indigo-400 transition-colors"
                      strokeWidth={1.5}
                    />
                    <h3 className="font-mono text-xs uppercase text-white tracking-widest mb-4">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:px-24 lg:py-12 border-r border-b border-zinc-800">
              <h2 className="text-4xl font-medium tracking-tighter uppercase">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  Implementation Process
                </span>
              </h2>
            </div>

            <div>
              {[
                {
                  phase: "Week 1-2",
                  title: "Architecture Design & Review",
                  description:
                    "Deep-dive technical assessment. Document current infrastructure, identify bottlenecks, design multi-region architecture with Terraform modules. Review with your team. Deliverable: 50+ page design document with diagrams, cost projections, migration roadmap.",
                },
                {
                  phase: "Week 3-6",
                  title: "Infrastructure Provisioning",
                  description:
                    "Execute Terraform deployments: VPCs, subnets, security groups, EKS/GKE clusters, RDS databases, Redis caches, S3 buckets, CloudFront distributions, monitoring stack. Configure CI/CD pipelines. Deliverable: Fully provisioned staging + production environments.",
                },
                {
                  phase: "Week 7-8",
                  title: "Migration & Cutover",
                  description:
                    "Blue-green deployment strategy. Migrate databases with AWS DMS (zero downtime). Route 10% traffic to new infrastructure, monitor, gradually increase to 100%. Rollback plan ready. Deliverable: Production on new infrastructure, old decommissioned, 30-day support.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="grid lg:grid-cols-12 border-r border-b border-zinc-800 hover:bg-gradient-to-r hover:from-indigo-900/10 hover:to-transparent transition-all group"
                >
                  <div className="lg:col-span-2 p-12 lg:border-r border-zinc-800">
                    <div className="text-6xl font-medium tracking-tighter bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-transparent bg-clip-text group-hover:from-indigo-500/40 group-hover:to-purple-500/40 transition-all">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="lg:col-span-10 p-12">
                    <div className="font-mono text-xs uppercase text-zinc-400 tracking-widest mb-4">
                      {step.phase}
                    </div>
                    <h3 className="text-2xl font-medium tracking-tight text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">
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
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:px-24 lg:py-12 border-r border-b border-zinc-800">
              <h2 className="text-4xl font-medium tracking-tighter uppercase">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  Investment
                </span>
              </h2>
            </div>

            <div className="p-16 lg:p-24 border-r border-b border-zinc-800">
              <div className="border border-zinc-800 p-16">
                <div className="pb-12 border-b border-zinc-800 mb-12">
                  <div className="font-mono text-xs uppercase text-zinc-400 tracking-widest mb-4">
                    Enterprise Cloud Infrastructure
                  </div>
                  <div className="text-6xl font-medium tracking-tighter bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
                    $25,000
                  </div>
                  <div className="font-mono text-xs uppercase text-zinc-400 tracking-widest">
                    One-time · 8-week delivery
                  </div>
                </div>

                <div className="grid md:grid-cols-2 pb-12 border-b border-zinc-800 mb-12">
                  {[
                    "Complete multi-region AWS/GCP architecture design",
                    "100% Terraform-managed infrastructure provisioning",
                    "Kubernetes cluster setup with auto-scaling",
                    "Database migration with zero-downtime strategy",
                    "CI/CD pipeline configuration (GitHub Actions/GitLab)",
                    "Observability stack (Prometheus, Grafana, ELK)",
                    "Security audit & compliance (SOC 2/HIPAA-ready)",
                    "30 days post-launch operational support",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start py-3">
                      <div className="w-1 h-1 bg-purple-400 mt-2 mr-4 shrink-0" />
                      <span className="text-sm text-zinc-400">{item}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <Link
                    href="/#contact?source=cloud-infrastructure-pricing"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-medium uppercase tracking-widest hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/50"
                  >
                    Request Proposal
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:px-24 lg:py-12 border-r border-b border-zinc-800">
              <h2 className="text-4xl font-medium tracking-tighter uppercase">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  Service Level Agreement
                </span>
              </h2>
            </div>

            <div className="border-r border-b border-zinc-800">
              {[
                "99.99% uptime SLA measured over 30-day period post-launch",
                "Infrastructure-as-code with 100% Terraform coverage (no manual console changes)",
                "Multi-region failover tested with chaos engineering (random AZ/region shutdowns)",
                "Cost optimization delivering 40-60% savings vs. current infrastructure",
                "30-day operational support with 4-hour response SLA",
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-12 flex items-start hover:bg-gradient-to-r hover:from-indigo-900/10 hover:to-transparent transition-all group"
                >
                  <div className="w-6 h-6 border border-purple-500/50 flex items-center justify-center shrink-0 mr-6 mt-1 group-hover:border-purple-400 transition-colors">
                    <div className="w-2 h-2 bg-purple-400" />
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:px-24 lg:py-12 border-r border-b border-zinc-800">
              <h2 className="text-4xl font-medium tracking-tighter uppercase">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  Technical FAQ
                </span>
              </h2>
            </div>

            <div>
              {[
                {
                  q: "Do you work with AWS, GCP, or Azure?",
                  a: "We specialize in AWS and GCP. For Azure, we partner with certified architects. Most enterprises choose AWS for maturity or GCP for Kubernetes/ML workloads.",
                },
                {
                  q: "What if our application isn't containerized?",
                  a: "We handle containerization as part of the project. Dockerfiles, multi-stage builds, security scanning. Turn your monolith into 12-factor app. Adds 1-2 weeks to timeline.",
                },
                {
                  q: "Can you take over existing infrastructure?",
                  a: "Yes. We call this 'Terraform Import' - reverse-engineer your existing AWS resources into Terraform state. Typical import project: 2-3 weeks, $8,000 fixed price.",
                },
                {
                  q: "What happens after 8 weeks and 30-day support?",
                  a: "You own the infrastructure. Complete documentation, runbooks, and Terraform code provided. Ongoing support: $5,000/month retainer (includes on-call, security patching, scaling).",
                },
                {
                  q: "Do you handle regulatory compliance (HIPAA, SOC 2)?",
                  a: "We design architectures meeting technical requirements for HIPAA and SOC 2. For formal audits/certifications, we partner with compliance firms. Architecture prep included; audit fees separate.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="p-16 lg:p-24 border-r border-b border-zinc-800 hover:bg-gradient-to-br hover:from-indigo-900/10 hover:to-purple-900/10 transition-all"
                >
                  <h3 className="text-lg font-semibold text-white tracking-wide mb-6">
                    {faq.q}
                  </h3>
                  <p className="text-base text-zinc-400 leading-relaxed max-w-3xl">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:p-24 border-r border-b border-zinc-800">
              <div className="border border-zinc-800 p-16 bg-gradient-to-br from-indigo-900/10 to-purple-900/10">
                <div className="pb-12 border-b border-zinc-800 mb-12 text-center">
                  <h2 className="text-4xl font-medium tracking-tighter uppercase mb-6">
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                      Ready to Deploy?
                    </span>
                  </h2>
                  <p className="text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                    Schedule a 30-minute technical consultation to discuss
                    infrastructure requirements and receive a customized
                    architecture proposal.
                  </p>
                </div>

                <div className="text-center">
                  <Link
                    href="/#contact?source=cloud-infrastructure-final-cta"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-medium uppercase tracking-widest hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/50"
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <p className="font-mono text-xs uppercase text-zinc-400 tracking-widest mt-6">
                    Response within 24 hours · No obligation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
