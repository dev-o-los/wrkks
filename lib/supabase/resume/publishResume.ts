import { Resume } from "@/lib/types";

export async function publishResume(resume: Resume | null) {
  const res = await fetch("/api/user/publish-resume", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ resume }),
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.error);

  return data;
}
