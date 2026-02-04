"use client";

import { useResumeStore } from "@/hooks/stores/useResumeStore";
import { normalizeResume } from "@/lib/helpers";
import { useState } from "react";
import AnimatedIconButton from "./AnimatedBtn";
import { NotFoundPage } from "./NotFound";
import { ResumeCard } from "./resume/ResumeCard";
import { ResumeEditor } from "./resume/ResumeEditor";
import EyeIcon from "./ui/eye-icon";
import PenIcon from "./ui/pen-icon";

export default function ResumePreview() {
  const resume = useResumeStore((s) => s.resume);
  const [isEditMode, setisEditMode] = useState(false);

  const normalizedResume = normalizeResume(resume);

  if (!resume) return <NotFoundPage />;

  return (
    <div>
      <div className="flex tracking-wide justify-start gap-2.5 max-sm:w-full md:w-[80vw] max-sm:px-6">
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
      </div>
      <div className="min-h-screen justify-center flex py-12 px-4">
        {isEditMode ? (
          <ResumeEditor />
        ) : (
          <ResumeCard resume={normalizedResume} />
        )}
      </div>
    </div>
  );
}
