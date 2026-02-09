"use client";

import Loading from "@/components/loading";
import { NotFoundPage } from "@/components/NotFound";
import { ResumeCard } from "@/components/resume/ResumeCard";
import { getUserResumeAndClerkId } from "@/lib/supabase/resume/getResume";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function UserPage() {
  const params = useParams();

  const { data, isPending, isError } = useQuery({
    queryKey: ["user-resume"],
    queryFn: () => getUserResumeAndClerkId(params.slug as string),
  });

  const isEmptyResume =
    !data?.resume ||
    (typeof data.resume === "object" && Object.keys(data.resume).length === 0);

  if (isPending) return <Loading />;
  if (isError || !data?.resume || isEmptyResume || !data.clerk_user_id)
    return <NotFoundPage />;

  return <ResumeCard resume={data.resume} clerkId={data.clerk_user_id} />;
}
