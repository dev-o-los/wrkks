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

  if (updates.username) {
    const { data: existingUser, error: checkError } = await supabase
      .from("users")
      .select("clerk_user_id")
      .eq("username", updates.username)
      .single();

    if (checkError) {
      console.error("Error checking username uniqueness:", checkError);
      throw new Error("Could not verify username availability");
    }

    // If we found someone with that username AND it's not the current user
    if (existingUser && existingUser.clerk_user_id !== userId) {
      throw new Error("Username is already taken");
    }
  }

  const { data, error } = await supabase
    .from("users")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("clerk_user_id", userId)
    .select()
    .single();

  if (error) {
    console.error("Supabase update error:", error);
    // Handle database-level unique constraint just in case of a race condition
    if (error.code === "23505") {
      throw new Error("This username is no longer available");
    }
    return null;
  }

  return data;
}
