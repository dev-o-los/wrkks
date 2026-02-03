"use server";

import { Resume } from "@/lib/types";
import { auth } from "@clerk/nextjs/server";
import { createClient } from "../server";

export async function publishResume(resume: Resume | null) {
  const supabase = await createClient();
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  // insert or update (upsert)
  const { data, error } = await supabase
    .from("users")
    .update({
      resume: resume,
      islive: resume === null ? false : true,
      updated_at: new Date().toISOString(),
    })
    .eq("clerk_user_id", userId)
    .select()
    .single();

  if (error) {
    console.error("Publish error:", error);
    throw error;
  }

  return data;
}
