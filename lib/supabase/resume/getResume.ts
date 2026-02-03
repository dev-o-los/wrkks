"use server";

import { Resume } from "@/lib/types";
import { auth } from "@clerk/nextjs/server";
import { createClient } from "../server";

type UserResumeResponse = {
  resume: Resume | null;
};

export async function getUserResume(
  username: string,
): Promise<UserResumeResponse> {
  const supabase = await createClient();
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  const { data, error } = await supabase
    .from("users")
    .select("resume")
    .eq("username", username)
    .eq("clerk_user_id", userId)
    .single();

  if (error) {
    throw new Error("Failed to fetch resume data");
  }

  if (!data) {
    throw new Error("User record not found");
  }

  return data;
}
