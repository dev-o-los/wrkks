"use client";

import { SignUpButton, useAuth } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomeActionBtn() {
  const { isSignedIn } = useAuth();

  return (
    <div className="mt-10 flex cursor-pointer flex-col sm:flex-row items-center justify-center gap-4">
      {isSignedIn ? (
        <Link
          href={isSignedIn ? "/upload" : "#"}
          className="w-full sm:w-auto px-7 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-black font-semibold rounded-full shadow-lg hover:opacity-90 transition-all flex items-center justify-center group"
        >
          Build My Website
          <ArrowRight className="ml-2.5 size-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      ) : (
        <SignUpButton signInForceRedirectUrl={"/upload"}>
          <div className="w-full sm:w-auto px-7 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-black font-semibold rounded-full shadow-lg hover:opacity-90 transition-all flex items-center justify-center group">
            Build My Website
            <ArrowRight className="ml-2.5 size-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </SignUpButton>
      )}
    </div>
  );
}
