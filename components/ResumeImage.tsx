"use client";

import { useUser } from "@clerk/nextjs";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react"; // 1. Import useState

export default function ResumeImage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const [isVisible, setIsVisible] = useState(true); // 2. Local state

  if (!isLoaded || !isSignedIn || !user.hasImage || !isVisible) return null;

  return (
    <div className="group relative w-24 h-24 rounded-xl bg-muted border border-border shrink-0">
      <div className="w-full h-full absolute overflow-hidden rounded-xl">
        <Image
          src={user.imageUrl}
          alt="User profile image"
          fill
          className="object-cover"
          sizes="112px"
          priority
        />
      </div>

      {/* Remove Button - Just hides the component */}
      <button
        onClick={() => setIsVisible(false)} // 3. Set visibility to false
        className="absolute -top-2 -right-2 bg-destructive p-1 rounded-full shadow-md hover:scale-110 active:scale-95 transition-all z-20"
        title="Hide image"
      >
        <X size={14} />
      </button>

      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl" />
    </div>
  );
}
