/* eslint-disable @typescript-eslint/no-explicit-any */

import { createClient } from "@/lib/supabase/server";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// allowed fields
type UserField = "email" | "username" | "resume" | "islive";

// values to update
export type UpdateUserData = Partial<Record<UserField, any>>;

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ msg: "Unauthorized" }, { status: 401 });
    }

    const updates: UpdateUserData = await req.json();

    if (!updates || Object.keys(updates).length === 0) {
      return NextResponse.json(
        { msg: "No fields provided to update" },
        { status: 400 },
      );
    }

    const supabase = await createClient();

    // ✅ Username uniqueness check
    if (updates.username) {
      const { data: existingUser, error: checkError } = await supabase
        .from("users")
        .select("clerk_user_id")
        .eq("username", updates.username)
        .maybeSingle();

      if (checkError) {
        console.error("Username check error:", checkError);
        return NextResponse.json(
          { msg: "Could not verify username availability" },
          { status: 500 },
        );
      }

      if (existingUser && existingUser.clerk_user_id !== userId) {
        return NextResponse.json(
          { msg: "Username is already taken" },
          { status: 409 },
        );
      }
    }

    // ✅ Perform update
    const { data, error } = await supabase
      .from("users")
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq("clerk_user_id", userId)
      .select()
      .maybeSingle();

    if (error) {
      console.error("Supabase update error:", error);

      if (error.code === "23505") {
        return NextResponse.json(
          { msg: "This username is no longer available" },
          { status: 409 },
        );
      }

      return NextResponse.json(
        { msg: "Failed to update user data" },
        { status: 500 },
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
