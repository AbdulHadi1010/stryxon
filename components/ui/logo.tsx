import Link from "next/link";
import { Zap } from "lucide-react";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center gap-2"
      aria-label="Stryxon"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-indigo-600 to-indigo-500 shadow-lg">
        <Zap className="h-5 w-5 text-white" fill="white" />
      </div>
      <span className="font-nacelle text-xl font-bold text-gray-900">
        Stryxon
      </span>
    </Link>
  );
}
