"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function BentoThemeToggleBtn() {
  const { setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <div className="md:col-span-4  p-6 rounded-3xl flex flex-col justify-between bg-neutral-100 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 transition-all">
      <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
        Appearance
      </span>

      <div className="flex items-center justify-between w-full">
        <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
          {isDark ? "Obsidian" : "Luminous"}
        </span>

        {/* Classic Android/Material Toggle */}
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-200 outline-none ${
            isDark ? "bg-blue-600" : "bg-neutral-300"
          }`}
        >
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-200 ${
              isDark ? "translate-x-6" : "translate-x-1"
            }`}
          >
            {isDark ? (
              <Moon size={12} className="text-blue-600" />
            ) : (
              <Sun size={12} className="text-amber-500" />
            )}
          </span>
        </button>
      </div>
    </div>
  );
}
