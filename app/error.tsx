"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 mb-6">
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Something went wrong
          </h1>
          <p className="text-gray-400 text-lg mb-2">
            We encountered an unexpected error while loading this page.
          </p>
          {error.digest && (
            <p className="text-gray-500 text-sm font-mono">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-4 bg-gray-800 border border-indigo-500/30 text-white font-semibold rounded-full hover:bg-gray-700 transition-all"
          >
            Go Home
          </Link>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 p-6 bg-gray-900 rounded-lg text-left">
            <h3 className="text-red-400 font-semibold mb-2">
              Development Error Details:
            </h3>
            <pre className="text-xs text-gray-300 overflow-x-auto">
              {error.message}
            </pre>
            {error.stack && (
              <pre className="text-xs text-gray-500 mt-4 overflow-x-auto">
                {error.stack}
              </pre>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
