"use client";

import { useResumeStore } from "@/hooks/stores/useResumeStore";
import { getUserData } from "@/lib/supabase/getUserData";
import { publishResume } from "@/lib/supabase/resume/publishResume";
import { Resume } from "@/lib/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { toastManager } from "./ui/toast";

export function PublishButton() {
  const resume = useResumeStore((s) => s.resume);
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["islive", "user-l"],
    queryFn: async () => getUserData(["islive", "username"]),
    placeholderData: { islive: false, username: "username" },
  });

  const islive = data?.islive ?? false;
  const username = (data?.username as string) ?? "/website";

  const mutation = useMutation({
    mutationFn: (resumeData: Resume | null) => publishResume(resumeData),
    onSuccess: (resumeData) => {
      const data = resumeData?.resume;

      toastManager.add({
        title:
          data !== null
            ? "Resume published successfully!"
            : "Resume unpublished successfully!",
        type: "success",
      });

      queryClient.setQueryData(["islive", "user-l"], {
        islive: data !== null ? true : false,
        username: resumeData !== null ? resumeData.username : "",
      });
    },
    onError: (err) => {
      toastManager.add({
        title: err.message,
        type: "error",
      });
    },
  });

  const handlePublish = () => {
    if (!resume) {
      toastManager.add({
        title: "Please create your resume before publishing.",
        type: "error",
      });
      return;
    }

    if (islive) {
      router.push(username);
    } else {
      mutation.mutate(resume);
    }
  };

  const handleUnpublish = () => {
    mutation.mutate(null);
  };
  return (
    <div className="flex gap-2.5 w-full">
      {islive && (
        <Button
          onClick={handleUnpublish}
          variant="secondary"
          className="w-full"
        >
          Unpublish
        </Button>
      )}
      <Button
        onClick={handlePublish}
        disabled={mutation.isPending}
        className="w-full"
      >
        {mutation.isPending
          ? "Publishing..."
          : islive
            ? "Visit Site"
            : "Publish"}
      </Button>
    </div>
  );
}
