"use server";

import { normalizeResume } from "../helpers";

export async function parseResume(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/parse-resume`,
    {
      method: "POST",
      body: formData,
    },
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.msg || "Upload failed");
  }

  return data;
}

export async function structureResume(text: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/extract-info`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    },
  );

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.msg || "Failed to structure resume");
  }

  const data = await res.json();
  return normalizeResume(data); // this is structured Resume JSON
}
