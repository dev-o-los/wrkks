"use client";

import { Button } from "@/components/ui/button";
import { toastManager } from "@/components/ui/toast";
import { useResumeStore } from "@/hooks/stores/useResumeStore";
import { parseResume, structureResume } from "@/lib/server/actions";
import { useMutation } from "@tanstack/react-query";
import { SparklesIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function GenerateBtn({ file }: { file: File }) {
  const router = useRouter();
  const setRawText = useResumeStore((s) => s.setRawText);
  const setResume = useResumeStore((s) => s.setResume);

  const { isPending, mutate } = useMutation({
    mutationFn: async (file: File) => {
      const parsed = await parseResume(file);
      const structured = await structureResume(parsed.text as string);

      return {
        rawText: parsed.text,
        structured,
      };
    },
    onSuccess: (data) => {
      setRawText(data.rawText);
      setResume(data.structured);
      router.push("/website");
    },
    onError: (error) => {
      toastManager.add({
        title: error.message,
        type: "error",
      });
    },
  });

  return (
    <Button
      variant="outline"
      className={`py-5 px-6 rounded-full`}
      disabled={!file || isPending}
      onClick={() => mutate(file)}
    >
      {isPending ? (
        <div className="animate-pulse">Generating site...</div>
      ) : (
        "Generate Site"
      )}
      <SparklesIcon aria-hidden="true" className="-me-1 opacity-60" size={16} />
    </Button>
  );
}
