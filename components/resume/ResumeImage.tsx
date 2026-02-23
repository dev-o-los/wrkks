"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

async function fetchUserImage(userId: string): Promise<string | null> {
  const res = await fetch(`/api/user-image?userId=${userId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch user image");
  }

  const data = await res.json();
  return data.imageUrl;
}

export default function ResumeImage({
  userid,
  removeDecoration = false,
}: {
  userid: string;
  removeDecoration?: boolean;
}) {
  const { data: imageUrl } = useQuery({
    queryKey: ["user-image", userid],
    queryFn: () => fetchUserImage(userid),
    enabled: !!userid, // only run if userId exists
  });

  if (!imageUrl) return null;

  return removeDecoration ? (
    <div className="relative size-full">
      <Image
        src={imageUrl}
        alt="User profile image"
        fill
        className="object-cover"
        sizes="112px"
        priority
      />
    </div>
  ) : (
    <div className="relative w-24 h-24 rounded-xl bg-muted border border-border shrink-0">
      <div className="w-full h-full absolute overflow-hidden rounded-xl">
        <Image
          src={imageUrl}
          alt="User profile image"
          fill
          className="object-cover"
          sizes="112px"
          priority
        />
      </div>
    </div>
  );
}
