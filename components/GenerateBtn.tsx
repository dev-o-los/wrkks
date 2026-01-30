"use client";

import { Button } from "@/components/ui/button";
import { toastManager } from "@/components/ui/toast";
import { parseResume } from "@/lib/server/actions";
import { useMutation } from "@tanstack/react-query";
import { SparklesIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function GenerateBtn({ file }: { file: File }) {
  const router = useRouter();

  const { data, isPending, mutate } = useMutation({
    mutationFn: parseResume,
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
      className="py-5 px-6 rounded-full"
      disabled={!file || isPending}
      onClick={() => {
        if (!file) return;
        mutate(file);

        if (data?.text) router.push("/website");
      }}
    >
      {isPending ? "Generating site..." : "Generate Site"}
      <SparklesIcon aria-hidden="true" className="-me-1 opacity-60" size={16} />
    </Button>
  );
}
