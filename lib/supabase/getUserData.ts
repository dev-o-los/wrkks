/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { createClient } from "@/lib/supabase/server";
import { auth } from "@clerk/nextjs/server";

// 👇 only allow real columns
type UserField = "id" | "email" | "username" | "resume" | "created_at";

export async function getUserData(fields?: UserField[]) {
  const supabase = await createClient();
  const { userId } = await auth();

  if (!userId) return null;

  const fieldString: string = fields?.length ? fields.join(",") : "*";

  const { data, error } = await supabase
    .from("users")
    .select(fieldString)
    .eq("clerk_user_id", userId)
    .single();

  if (error) {
    console.error("Supabase error:", error);
    return null;
  }

  return data as any;
}
