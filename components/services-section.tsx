"use client";

import { ExpandableCard } from "@/components/ui/expandable-card";

export default function ServicesSection() {
  const services = [
    {
      title: "Cloud Architecture & Migration",
      description: "Self-Healing Infrastructure",
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      content: (
        <>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              AWS
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Google Cloud
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Azure
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Terraform
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Pulumi
            </span>
          </div>
          <p>
            In the modern era, "The Cloud" shouldn't be a place where you
            manually click buttons in a console. That is a recipe for disaster,
            downtime, and security leaks. At Stryxon, we treat your
            infrastructure as software. Using industry-standard Infrastructure
            as Code (IaC) tools like Terraform and AWS CloudFormation, we build
            immutable environments that are versioned, reproducible, and secure
            by default.
          </p>
          <p>
            Whether you are currently stuck on a legacy provider, managing a
            fragile VPS, or looking to migrate a monolith to the cloud, our team
            handles the heavy lifting. We specialize in designing Virtual
            Private Clouds (VPCs) on AWS, GCP, and Azure that automatically
            scale up during traffic spikes and scale down to save costs when
            traffic is low. We don't just "host" your app; we give it a home
            that can survive any storm.
          </p>
          <p>
            Our migration process is designed for Zero Downtime. We utilize
            Blue/Green deployment strategies and database replication to ensure
            your users never notice the switch. Once migrated, we implement
            strict IAM policies and security groups, ensuring your data is
            locked down to enterprise standards. Stop playing server roulette
            and start building on bedrock.
          </p>
        </>
      ),
    },
    {
      title: "DevOps & Container Orchestration",
      description: "Ship Code Without Fear",
      src: "https://images.unsplash.com/photo-1605745341112-85968b19335b",
      content: (
        <>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Docker
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Kubernetes
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              GitHub Actions
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              GitLab CI
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              ArgoCD
            </span>
          </div>
          <p>
            Speed is the currency of modern engineering, but speed without
            safety is negligence. If your developers are manually dragging files
            to a server via FTP, or if you are terrified to deploy on Fridays,
            your DevOps culture is broken. Stryxon fixes this by implementing
            rigorous CI/CD pipelines using GitHub Actions and GitLab CI. We
            automate the testing, building, and deployment process so that
            shipping a feature is as simple as merging a pull request.
          </p>
          <p>
            We believe in the power of Containerization. By wrapping your
            applications in Docker, we ensure consistency across development,
            staging, and production environments. For high-scale applications,
            we orchestrate these containers using Kubernetes (K8s) and Amazon
            EKS. This allows your application to self-heal—if a container
            crashes, Kubernetes restarts it instantly before your users even
            notice.
          </p>
          <p>
            Our DevOps strategy isn't just about tools; it's about confidence.
            We implement automated rollbacks, canary deployments, and real-time
            monitoring. This means your team can deploy 10 times a day with the
            assurance that if something breaks, the system will catch it before
            it affects your revenue.
          </p>
        </>
      ),
    },
    {
      title: "AI Engineering & RAG Systems",
      description: "Custom AI Agents",
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      content: (
        <>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              OpenAI API
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              LangChain
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Pinecone
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              LlamaIndex
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Python
            </span>
          </div>
          <p>
            Off-the-shelf AI models like ChatGPT are powerful, but they are
            generic. They don't know your business, your customers, or your
            internal data. Stryxon bridges this gap with Retrieval-Augmented
            Generation (RAG). We build custom AI pipelines that ingest your
            PDFs, SQL databases, and documentation, indexing them into Vector
            Databases like Pinecone or Weaviate.
          </p>
          <p>
            This allows us to build intelligent agents that don't just
            "hallucinate" answers—they cite your actual data. Whether you need
            an internal HR bot that answers questions based on your employee
            handbook, or a customer support agent that references your live
            Shopify inventory, we engineer the logic using LangChain and Python.
          </p>
          <p>
            We go beyond simple text generation. We build "Agentic Workflows"
            where the AI can take action—querying a database, sending an email,
            or updating a CRM record based on the conversation. We handle the
            complex prompt engineering, context window management, and token
            optimization to ensure your AI solution is cost-effective and
            accurate.
          </p>
        </>
      ),
    },
    {
      title: "Workflow Automation & Integration",
      description: "Stop Manual Data Entry",
      src: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a",
      content: (
        <>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              n8n
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Zapier
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Python Scripts
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Webhooks
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              REST APIs
            </span>
          </div>
          <p>
            Every growing business eventually hits a wall of administrative
            chaos. You have data in your CRM, data in your email, and data in
            your spreadsheets, and none of them talk to each other. You end up
            hiring staff just to copy-paste information. Stryxon eliminates this
            "glue work" through robust, code-based automation.
          </p>
          <p>
            We specialize in low-code/code-hybrid platforms like n8n and custom
            Python scripting to build complex workflows. Unlike simple Zapier
            zaps that break easily, we build error-handled, logical workflows
            that can process thousands of events per hour. Imagine a system
            where a new lead on your website automatically triggers a background
            check, updates your CRM, generates a custom contract PDF, and
            notifies your sales team on Slack—all in under 3 seconds.
          </p>
          <p>
            We integrate deeply with any tool that has an API—Stripe,
            Salesforce, HubSpot, Slack, and proprietary internal tools. We
            monitor these automations 24/7/365, ensuring that your business
            logic runs silently and perfectly in the background, allowing your
            human team to focus on high-value strategy rather than data entry.
          </p>
        </>
      ),
    },
    {
      title: "Backend Engineering & APIs",
      description: "High-Performance Systems",
      src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      content: (
        <>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Python
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Django
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              FastAPI
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              PostgreSQL
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Redis
            </span>
          </div>
          <p>
            The frontend is what your users see, but the backend is where your
            business actually lives. A slow or insecure backend kills user
            retention instantly. At Stryxon, we are Python specialists. We build
            robust, type-safe APIs using FastAPI and Django, designed to serve
            data to your web and mobile apps with millisecond latency.
          </p>
          <p>
            We take data integrity seriously. We design normalized database
            schemas using PostgreSQL to ensure your data is stored efficiently
            and correctly. For high-velocity data needs, we implement caching
            layers using Redis to offload database pressure. We also handle the
            messy parts of backend dev: authentication (OAuth2, JWT), permission
            systems (RBAC), and third-party API integrations (Stripe, Twilio).
          </p>
          <p>
            Security is baked into every endpoint we write. We implement rate
            limiting to prevent abuse, input validation to stop injection
            attacks, and encryption at rest for sensitive user data. Whether you
            are building a new SaaS MVP or refactoring a legacy API that's
            slowing you down, we provide the engineering muscle to get it right.
          </p>
        </>
      ),
    },
    {
      title: "Cloud Cost Optimization (FinOps)",
      description: "Cut AWS Bills by 30-50%",
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      content: (
        <>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              AWS Cost Explorer
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              CloudHealth
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Reserved Instances
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Spot Fleets
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Savings Plans
            </span>
          </div>
          <p>
            The cloud was supposed to be cheap, but for many growing agencies,
            it becomes their biggest liability. Unused EC2 instances, unattached
            EBS volumes, and inefficient data transfer fees can quietly drain
            thousands of dollars from your bottom line. Stryxon turns this
            around. We don't just "look" at your bill; we implement active
            FinOps strategies.
          </p>
          <p>
            We perform deep-dive audits into your usage patterns. We replace
            expensive On-Demand instances with Spot Fleets for fault-tolerant
            workloads, purchase Savings Plans for predictable loads, and
            right-size over-provisioned databases. We automate the shutdown of
            development environments on weekends and set up strict budget
            alerts.
          </p>
          <p>
            Our goal is simple: We usually pay for ourselves within the first
            month of savings. We turn your cloud infrastructure from a financial
            black hole into a lean, efficient engine. You keep the performance;
            you lose the fat.
          </p>
        </>
      ),
    },
    {
      title: "Security & Compliance Hardening",
      description: "Enterprise-Grade Security",
      src: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      content: (
        <>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              AWS WAF
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              GuardDuty
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              IAM
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              SSL/TLS
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              VPN
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              SOC2 Prep
            </span>
          </div>
          <p>
            In the age of ransomware and data breaches, "default settings" are
            not enough. If your database is public-facing or your IAM users have
            full admin access, you are a ticking time bomb. Stryxon brings
            enterprise-grade security practices to agile teams. We believe in
            "Security by Design," not as an afterthought.
          </p>
          <p>
            We implement the Shared Responsibility Model correctly. This
            includes setting up Web Application Firewalls (WAF) to block SQL
            injection and DDOS attacks, configuring AWS GuardDuty for
            intelligent threat detection, and enforcing Least Privilege access
            controls via IAM. We encrypt all data at rest and in transit using
            industry-standard protocols.
          </p>
          <p>
            For agencies handling sensitive client data, we prepare your
            infrastructure for compliance standards (like SOC2 or HIPAA
            readiness) by ensuring comprehensive logging, backup retention
            policies, and disaster recovery plans are in place. We lock the
            doors so you can focus on building the house.
          </p>
        </>
      ),
    },
    {
      title: "Data Engineering & ETL Pipelines",
      description: "Break Down Data Silos",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      content: (
        <>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Python
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              AWS Glue
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              SQL
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Pandas
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Airflow
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Lambda
            </span>
          </div>
          <p>
            Data is the new oil, but for most businesses, it's unrefined and
            messy. You have customer data in Stripe, marketing data in Facebook
            Ads, and user logs in your database—but they don't talk to each
            other. Stryxon builds the "plumbing" that connects your business. We
            specialize in ETL (Extract, Transform, Load) processes using Python
            and AWS.
          </p>
          <p>
            We don't just move data; we clean it. We write robust scripts using
            Pandas and AWS Lambda to sanitize your messy inputs, standardizing
            formats and removing duplicates before they ever hit your dashboard.
            Whether you are building a data lake in S3 or a warehouse in
            PostgreSQL or Snowflake, we ensure the architecture is scalable and
            cost-effective.
          </p>
          <p>
            This service is critical for agencies who want to build "Unified
            Dashboards" for their clients. We handle the backend engineering
            that pulls data from APIs every hour, processes it, and stores it
            securely, ready for your visualization tools to consume.
          </p>
        </>
      ),
    },
    {
      title: "Web Scraping & Data Mining",
      description: "Turn the Web Into Your Database",
      src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
      content: (
        <>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Selenium
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Scrapy
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              BeautifulSoup
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Puppeteer
            </span>
            <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
              Proxy Rotation
            </span>
          </div>
          <p>
            Sometimes the data you need doesn't have an API. Maybe it's
            competitor pricing, real estate listings, or potential leads on a
            directory site. While others do this manually, Stryxon automates it.
            We build industrial-grade web scrapers that can navigate complex
            websites, handle logins, and extract structured data from the chaos
            of the web.
          </p>
          <p>
            We use advanced Python libraries like Selenium and Scrapy to
            simulate human behavior, rendering JavaScript and managing proxy
            rotation to avoid blocks. We turn unstructured HTML into clean JSON
            or CSV files delivered directly to your inbox or database.
          </p>
          <p>
            This is a game-changer for marketing agencies and product teams.
            Need to track competitor prices daily? Need to aggregate 10,000
            leads from a niche industry site? We build the bots that do the
            grunt work, giving you a competitive edge with proprietary datasets
            that your rivals don't have.
          </p>
        </>
      ),
    },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Our Services
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The White-Label Technical Partner for Agencies
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            We combine Immutable Cloud Infrastructure with Custom AI Agents.
            Click on any service to learn more.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ExpandableCard
              key={index}
              title={service.title}
              src={service.src}
              description={service.description}
              classNameExpanded="[&_h4]:text-black dark:[&_h4]:text-white [&_h4]:font-medium"
            >
              {service.content}
            </ExpandableCard>
          ))}
        </div>
      </div>
    </section>
  );
}
