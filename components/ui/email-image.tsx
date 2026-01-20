"use client";

import { useEffect, useState } from "react";

// Email obfuscation component - constructs email client-side to prevent scraping
export default function EmailImage({ className = "" }: { className?: string }) {
  const [email, setEmail] = useState("loading...");

  useEffect(() => {
    // Construct email client-side from encoded parts
    const user = "contact";
    const domain = "stryxon";
    const tld = "com";
    setEmail(`${user}@${domain}.${tld}`);
  }, []);

  return (
    <span className={className} aria-label="Email address">
      {email}
    </span>
  );
}
