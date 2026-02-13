import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ContactCTAProps {
  leadSource: string;
  headline?: string;
  description?: string;
}

export default function ContactCTA({
  leadSource,
  headline = "Ready to Transform Your Infrastructure?",
  description = "Let's discuss how we can solve your technical challenges with proven, battle-tested solutions.",
}: ContactCTAProps) {
  return (
    <section className="border border-zinc-800 p-16">
      <div className="text-center border-b border-zinc-800 pb-12 mb-12">
        <h2 className="text-4xl font-medium tracking-tighter uppercase text-white mb-6">
          {headline}
        </h2>
        <p className="text-sm text-zinc-500 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      <div className="text-center">
        <Link
          href={`/#contact?source=${leadSource}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium uppercase tracking-wider hover:bg-zinc-200 transition-colors border-2 border-white"
        >
          Schedule Consultation
          <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-xs text-zinc-500 uppercase tracking-wider mt-6">
          Response within 24 hours · No obligation
        </p>
      </div>
    </section>
  );
}
