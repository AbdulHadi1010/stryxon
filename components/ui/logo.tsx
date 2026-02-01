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
        src="/images/logo.png"
        alt="Stryxon Technologies"
        width={32}
        height={32}
        className="h-8 w-8"
      />
      <span className="font-nacelle text-xl font-bold text-gray-200">
        Stryxon
      </span>
    </Link>
  );
}
