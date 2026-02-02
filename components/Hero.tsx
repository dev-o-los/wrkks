import { Sparkles } from "lucide-react";
import Link from "next/link";
import HomeActionBtn from "./BuildMyWebsiteBtn";
import Timeline from "./timeline";

const Hero = () => (
  <div className="relative flex flex-col gap-16 items-center justify-center px-6 py-12 overflow-hidden">
    {/* Dynamic Background Blur */}
    <div className="absolute inset-0 pointer-events-none -z-10">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-75 h-75 md:w-150 md:h-150 bg-blue-500/10 dark:bg-white/5 blur-[120px] rounded-full" />
    </div>

    <div className="relative z-10 text-center max-w-4xl mx-auto">
      {/* Glass Badge */}
      <div className="inline-flex items-center backdrop-blur-md bg-black/3 dark:bg-white/5 border border-black/10 dark:border-white/15 rounded-full px-4 py-1.5 transition-all hover:border-black/20 dark:hover:border-white/25">
        <Link
          href="#"
          className="flex items-center text-xs md:text-sm font-medium text-slate-600 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors"
        >
          <Sparkles className="mr-2 size-3.5 text-blue-500" />
          LinkedIn to Website With Wrkks
        </Link>
      </div>

      {/* Gradient Headline */}
      <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-linear-to-b dark:from-white dark:to-white/60">
        Turn your Resume into a <br className="hidden md:block" />
        <span className="text-blue-600 dark:text-blue-400">
          Stunning Website
        </span>{" "}
        in seconds.
      </h1>

      {/* Content-Aware Paragraph */}
      <p className="mt-6 text-base md:text-lg text-slate-600 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
        Stop wrestling with website builders. Drop your LinkedIn PDF or upload a
        resume PDF, and we&apos;ll instantly generate a professional,
        high-converting personal site that gets you hired.
      </p>

      {/* Responsive CTA Buttons */}
      <HomeActionBtn />
    </div>

    <Timeline />
  </div>
);

export default Hero;
