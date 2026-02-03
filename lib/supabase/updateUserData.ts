/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { createClient } from "@/lib/supabase/server";
import { auth } from "@clerk/nextjs/server";

// 👇 same allowed fields
type UserField = "email" | "username" | "resume" | "islive";

// 👇 values to update (only these keys allowed)
type UpdateUserData = Partial<Record<UserField, any>>;

export async function updateUserData(updates: UpdateUserData) {
  const supabase = await createClient();
  const { userId } = await auth();

  if (!userId) return null;

  if (!updates || Object.keys(updates).length === 0) {
    throw new Error("No fields provided to update");
  }

  const { data, error } = await supabase
    .from("users")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("clerk_user_id", userId)
    .select()
    .single();

  if (error) {
    console.error("Supabase update error:", error);
    return null;
  }

  return data;
}
