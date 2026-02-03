"use client";

import { useTheme } from "next-themes";
import { SpinnerRoundFilled } from "spinners-react";

export default function Loading() {
  const { resolvedTheme } = useTheme();

  // Prevent hydration mismatch by rendering only when theme is ready
  if (!resolvedTheme) return null;
  const spinnerColor = resolvedTheme === "dark" ? "white" : "black";

  return (
    <div className="flex flex-col h-screen justify-center items-center text-center">
      <SpinnerRoundFilled size="9rem" color={spinnerColor} />
      <span className="mt-7">Loading your wrkk, please wait...</span>
    </div>
  );
}
