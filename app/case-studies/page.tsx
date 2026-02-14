import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import { getPublishedCaseStudies } from "@/lib/case-studies";
import { ArrowRight, Calendar, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Logs & Case Studies | Real-World Solutions | Stryxon",
  description:
    "Proven track record of solving complex infrastructure challenges. Browse our case studies featuring cloud migrations, performance optimizations, and enterprise-scale deployments with measurable results.",
  keywords: [
    "engineering case studies",
    "cloud migration case studies",
    "infrastructure optimization",
    "AWS deployment case studies",
    "performance optimization results",
    "enterprise architecture case studies",
    "technical portfolio",
    "infrastructure consulting results",
  ],
  alternates: {
    canonical: "https://www.stryxon.com/case-studies",
  },
  openGraph: {
    title: "Engineering Logs & Case Studies | Stryxon",
    description:
      "Real-world case studies showcasing infrastructure transformations, cost reductions, and performance improvements.",
    url: "https://www.stryxon.com/case-studies",
    images: ["/images/case-studies-og.png"],
  },
};

export default async function CaseStudiesPage() {
  const caseStudies = await getPublishedCaseStudies();

  return (
    <>
      <div className="bg-black text-white min-h-screen">
        {/* Hero Section */}
        <section>
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:p-24 border-r border-b border-zinc-800">
              <div className="max-w-4xl">
                <div className="font-mono text-xs uppercase text-zinc-400 tracking-widest mb-6">
                  Our Work
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter uppercase mb-8">
                  Engineering Logs &{" "}
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                    Case Studies
                  </span>
                  .
                </h1>
                <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
                  Real-world infrastructure transformations, performance
                  optimizations, and cloud migrations. Every project backed by
                  measurable results and battle-tested architecture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section>
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            {caseStudies.length === 0 ? (
              <div className="p-16 lg:p-24 border-r border-b border-zinc-800 text-center">
                <p className="text-zinc-400">No case studies available yet.</p>
              </div>
            ) : (
              <div className="grid lg:grid-cols-2">
                {caseStudies.map((study, index) => {
                  const isBottomRow =
                    index >= caseStudies.length - (caseStudies.length % 2 || 2);
                  const isRightColumn = index % 2 === 1;

                  // Parse results - handle both string and array formats
                  const resultsArray: string[] = Array.isArray(study.frontmatter.results)
                    ? study.frontmatter.results
                    : study.frontmatter.results
                      ? [study.frontmatter.results]
                      : [];

                  return (
                    <Link
                      key={study.slug}
                      href={`/case-studies/${study.slug}`}
                      className={`group p-12 lg:p-16 border-b border-zinc-800 hover:bg-gradient-to-br hover:from-indigo-900/10 hover:to-purple-900/10 transition-all ${
                        isRightColumn ? "" : "border-r border-zinc-800"
                      }`}
                    >
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-xs text-zinc-400 uppercase tracking-widest mb-6">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-3 h-3" />
                          <span>{study.frontmatter.industry}</span>
                        </div>
                        <div className="w-1 h-1 bg-zinc-700 rounded-full" />
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          <span>
                            {new Date(
                              study.frontmatter.date
                            ).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                            })}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-3xl font-medium tracking-tighter text-white mb-4 group-hover:text-indigo-400 transition-colors">
                        {study.frontmatter.title}
                      </h2>

                      {/* Client Name */}
                      <div className="text-sm text-zinc-400 mb-6">
                        Client:{" "}
                        <span className="text-zinc-300">
                          {study.frontmatter.clientName}
                        </span>
                      </div>

                      {/* Results */}
                      {resultsArray.length > 0 && (
                        <div className="space-y-2 mb-8">
                          {resultsArray.slice(0, 3).map((result, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-sm text-zinc-400"
                            >
                              <ArrowRight className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                              <span>{result}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {study.frontmatter.technologies
                          .slice(0, 5)
                          .map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs border border-zinc-800 text-zinc-400 uppercase tracking-wider"
                            >
                              {tech}
                            </span>
                          ))}
                        {study.frontmatter.technologies.length > 5 && (
                          <span className="px-3 py-1 text-xs border border-zinc-800 text-zinc-400 uppercase tracking-wider">
                            +{study.frontmatter.technologies.length - 5} more
                          </span>
                        )}
                      </div>

                      {/* Read More */}
                      <div className="flex items-center gap-2 text-sm text-indigo-400 group-hover:gap-3 transition-all">
                        <span className="uppercase tracking-wider font-medium">
                          Read Case Study
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:p-24 border-r border-b border-zinc-800">
              <div className="border border-zinc-800 p-16 bg-gradient-to-br from-indigo-900/10 to-purple-900/10">
                <div className="text-center border-b border-zinc-800 pb-12 mb-12">
                  <h2 className="text-4xl font-medium tracking-tighter uppercase text-white mb-6">
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                      Ready to Write Your Success Story?
                    </span>
                  </h2>
                  <p className="text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                    Let&apos;s discuss how we can solve your infrastructure
                    challenges with proven, battle-tested solutions.
                  </p>
                </div>

                <div className="text-center">
                  <Link
                    href="/#contact?source=case-studies-index"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-medium uppercase tracking-widest hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-purple-500/50"
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
