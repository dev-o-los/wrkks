"use client";

import { useResumeStore } from "@/hooks/stores/useResumeStore";
import { normalizeResume } from "@/lib/helpers";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import AnimatedIconButton from "../buttons/AnimatedBtn";
import Loading from "../loading";
import { NotFoundPage } from "../NotFound";
import EyeIcon from "../ui/eye-icon";
import PenIcon from "../ui/pen-icon";
import WebsiteStyleSelector from "../WebsiteStylesSelector";
import BentoResume from "./BentoResumeCard";
import { ResumeCard } from "./ResumeCard";
import { ResumeEditor } from "./ResumeEditor";

export default function ResumePreview() {
  const resume = useResumeStore((s) => s.resume);
  const fetchResume = useResumeStore((s) => s.fetchResume);
  const websiteStyle = useResumeStore((s) => s.websiteStyle);
  const [isEditMode, setisEditMode] = useState(false);
  const { user, isLoaded } = useUser();

  const { isLoading } = useQuery({
    queryKey: ["resume-data"],
    queryFn: fetchResume,
    enabled: !!user && !resume,
  });

  if (!isLoaded || isLoading) return <Loading />;

  if (!resume || !user) return <NotFoundPage />;
  const normalizedResume = normalizeResume(resume);

  return (
    <div className="">
      <div className="flex tracking-wide justify-start gap-2.5 w-[80vw] mx-12">
        <AnimatedIconButton
          onClick={() => setisEditMode(false)}
          icon={<EyeIcon className="-me-0.5" />}
        >
          Preview
        </AnimatedIconButton>
        <AnimatedIconButton
          onClick={() => setisEditMode(true)}
          icon={<PenIcon />}
        >
          Edit
        </AnimatedIconButton>
        <WebsiteStyleSelector />
      </div>
      <div className="min-h-screen justify-center flex py-6 px-4">
        {isEditMode ? (
          <ResumeEditor />
        ) : websiteStyle === "bento" ? (
          <BentoResume userid={user.id} />
        ) : (
          <ResumeCard resume={normalizedResume} clerkId={user.id} />
        )}
      </div>
    </div>
  );
}
