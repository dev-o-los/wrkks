"use client";

import Loading from "@/components/loading";
import { NotFoundPage } from "@/components/NotFound";
import { ResumeCard } from "@/components/resume/ResumeCard";
import { getUserResume } from "@/lib/supabase/resume/getResume";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function UserPage() {
  const params = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["user-resume"],
    queryFn: () => getUserResume(params.slug as string),
  });

  if (isLoading) return <Loading />;
  if (isError || !data?.resume) return <NotFoundPage />;

  return <ResumeCard resume={data.resume} />;
}
