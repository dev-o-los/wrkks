import { createClient } from "@/lib/supabase/server";
import { Resume } from "@/lib/types";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { msg: "User not authenticated" },
        { status: 401 },
      );
    }

    const body = await req.json();
    const resume: Resume | null = body.resume;

    const supabase = await createClient();

    const { data, error } = await supabase
      .from("users")
      .update({
        resume,
        islive: resume === null ? false : true,
        updated_at: new Date().toISOString(),
      })
      .eq("clerk_user_id", userId)
      .select()
      .single();

    if (error) {
      console.error("Publish error:", error);
      return NextResponse.json(
        { msg: "Failed to publish resume" },
        { status: 500 },
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch {
    return NextResponse.json({ msg: "Internal server error" }, { status: 500 });
  }
}
