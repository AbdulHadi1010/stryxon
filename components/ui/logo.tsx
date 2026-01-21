import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center gap-2"
      aria-label="Stryxon"
    >
      <Image
        src="/images/stryxon-logo.png"
        alt="Stryxon Logo"
        width={32}
        height={32}
        className="h-8 w-auto"
        priority
      />
      <span className="font-nacelle text-xl font-bold text-gray-200">
        Stryxon
      </span>
    </Link>
  );
}
