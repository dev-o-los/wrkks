"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function ResumeImage() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return null; // or a spinner
  if (!isSignedIn) return null;

  console.log(user.hasImage);

  return user.hasImage ? (
    <div className="relative w-24 h-24 rounded-xl bg-muted border border-border shrink-0 overflow-hidden">
      <Image
        src={user.imageUrl}
        alt="User profile image"
        fill
        className="object-cover"
        sizes="112px"
        priority
      />
    </div>
  ) : null;
}
