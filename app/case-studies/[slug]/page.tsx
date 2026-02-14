import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import ContactCTA from "@/components/contact-cta";
import {
  getCaseStudyBySlug,
  getPublishedCaseStudies,
} from "@/lib/case-studies";
import { ArrowLeft, Calendar, Building2, CheckCircle } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Stryxon",
    };
  }

  const { frontmatter } = caseStudy;

  return {
    title: `${frontmatter.title} | Case Study | Stryxon`,
    description:
      frontmatter.challenge || frontmatter.solution || frontmatter.title,
    keywords: [
      frontmatter.industry,
      "case study",
      ...frontmatter.technologies,
      "engineering case study",
      "infrastructure transformation",
    ],
    alternates: {
      canonical: `https://www.stryxon.com/case-studies/${slug}`,
    },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.challenge || frontmatter.solution || "",
      url: `https://www.stryxon.com/case-studies/${slug}`,
      type: "article",
      images: frontmatter.imageUrl ? [frontmatter.imageUrl] : [],
      publishedTime: frontmatter.date,
    },
  };
}

export async function generateStaticParams() {
  const caseStudies = await getPublishedCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy || !caseStudy.frontmatter.published) {
    notFound();
  }

  const { frontmatter, content } = caseStudy;

  // Parse results - handle both string and array formats
  const resultsArray = Array.isArray(frontmatter.results)
    ? frontmatter.results
    : frontmatter.results
      ? [frontmatter.results]
      : [];

  return (
    <>
      <div className="bg-black text-white min-h-screen">
        {/* Back Navigation */}
        <section>
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-8 lg:p-12 border-r border-b border-zinc-800">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="uppercase tracking-wider">
                  Back to Case Studies
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section>
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:p-24 border-r border-b border-zinc-800">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 uppercase tracking-widest mb-8">
                <div className="flex items-center gap-2">
                  <Building2 className="w-3 h-3" />
                  <span>{frontmatter.industry}</span>
                </div>
                <div className="w-1 h-1 bg-zinc-700 rounded-full" />
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3" />
                  <span>
                    {new Date(frontmatter.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="w-1 h-1 bg-zinc-700 rounded-full" />
                <div className="px-3 py-1 border border-indigo-800 text-indigo-400 bg-indigo-900/20">
                  {frontmatter.clientName}
                </div>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter uppercase mb-12 max-w-5xl leading-tight">
                {frontmatter.title}
              </h1>

              {/* Key Outcomes */}
              {resultsArray.length > 0 && (
                <div className="border border-zinc-800 p-8 lg:p-12 bg-gradient-to-br from-indigo-900/10 to-purple-900/10">
                  <div className="font-mono text-xs uppercase text-zinc-400 tracking-widest mb-6">
                    Key Outcomes
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resultsArray.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                        <span className="text-base text-zinc-300 leading-relaxed">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section>
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="grid lg:grid-cols-12">
              {/* Main Content */}
              <div className="lg:col-span-8 p-12 lg:p-16 border-r border-b border-zinc-800">
                {/* Challenge Section */}
                {frontmatter.challenge && (
                  <div className="mb-16">
                    <h2 className="text-3xl font-medium tracking-tighter text-white mb-6 uppercase">
                      <span className="bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
                        The Challenge
                      </span>
                    </h2>
                    <p className="text-lg text-zinc-400 leading-relaxed">
                      {frontmatter.challenge}
                    </p>
                  </div>
                )}

                {/* Solution Section */}
                {frontmatter.solution && (
                  <div className="mb-16">
                    <h2 className="text-3xl font-medium tracking-tighter text-white mb-6 uppercase">
                      <span className="bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text">
                        The Solution
                      </span>
                    </h2>
                    <p className="text-lg text-zinc-400 leading-relaxed">
                      {frontmatter.solution}
                    </p>
                  </div>
                )}

                {/* MDX Content - Rendered as Prose */}
                <div className="prose prose-invert prose-lg max-w-none">
                  <div className="border-t border-zinc-800 pt-12">
                    <div className="font-mono text-xs uppercase text-zinc-400 tracking-widest mb-8">
                      Full Case Study
                    </div>
                    {/* Basic markdown rendering - whitespace preserved */}
                    <div className="space-y-6 text-zinc-400 leading-relaxed whitespace-pre-wrap">
                      {content.split("\n\n").map((paragraph, idx) => {
                        // Skip frontmatter lines
                        if (
                          paragraph.trim().startsWith("---") ||
                          paragraph.trim().startsWith("#")
                        ) {
                          return null;
                        }

                        // Skip ContactCTA component lines
                        if (paragraph.includes("<ContactCTA")) {
                          return null;
                        }

                        return paragraph.trim() ? (
                          <p key={idx} className="text-base leading-relaxed">
                            {paragraph}
                          </p>
                        ) : null;
                      })}
                    </div>

                    {/* Note about full MDX rendering */}
                    <div className="mt-12 p-6 border border-zinc-800 bg-zinc-900/50">
                      <p className="text-sm text-zinc-400">
                        <strong className="text-zinc-300">Note:</strong> For
                        full MDX rendering with rich formatting, install{" "}
                        <code className="text-indigo-400">@next/mdx</code> and
                        configure Next.js MDX support. The content above is
                        displayed in simplified text format.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4 p-12 lg:p-16 border-b border-zinc-800 space-y-12">
                {/* Tech Stack */}
                <div>
                  <h3 className="font-mono text-xs uppercase text-zinc-400 tracking-widest mb-6">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {frontmatter.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 text-sm border border-zinc-800 text-zinc-300 bg-zinc-900/50 uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Industry */}
                <div>
                  <h3 className="font-mono text-xs uppercase text-zinc-400 tracking-widest mb-4">
                    Industry
                  </h3>
                  <p className="text-base text-white font-medium">
                    {frontmatter.industry}
                  </p>
                </div>

                {/* Client */}
                <div>
                  <h3 className="font-mono text-xs uppercase text-zinc-400 tracking-widest mb-4">
                    Client
                  </h3>
                  <p className="text-base text-white font-medium">
                    {frontmatter.clientName}
                  </p>
                </div>

                {/* Project Date */}
                <div>
                  <h3 className="font-mono text-xs uppercase text-zinc-400 tracking-widest mb-4">
                    Completed
                  </h3>
                  <p className="text-base text-white font-medium">
                    {new Date(frontmatter.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })}
                  </p>
                </div>

                {/* CTA Box */}
                <div className="border border-zinc-800 p-6 bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
                  <p className="text-sm text-zinc-400 mb-4">
                    Need similar results for your infrastructure?
                  </p>
                  <Link
                    href={`/#contact?source=case-study-${slug}`}
                    className="inline-flex items-center text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium uppercase tracking-wider"
                  >
                    Let&apos;s Talk →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Case Studies */}
        <section>
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:p-24 border-r border-b border-zinc-800">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-medium tracking-tighter text-white uppercase">
                  More Case Studies
                </h2>
                <Link
                  href="/case-studies"
                  className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-wider"
                >
                  View All →
                </Link>
              </div>
              <div className="text-center">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center px-6 py-3 border border-zinc-800 text-white text-xs font-medium uppercase tracking-widest hover:bg-zinc-900 transition-all"
                >
                  Browse All Projects
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section>
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:p-24 border-r border-b border-zinc-800">
              <ContactCTA
                leadSource={`case-study-${slug}`}
                headline="Ready to Transform Your Infrastructure?"
                description="Let's architect a solution that delivers measurable results like the projects above."
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
