import { getUserData, UserField } from "@/lib/supabase/user/getUserData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  // Get 'fields' from query string: e.g., /api/user?fields=username,resume
  const fieldsParam = searchParams.get("fields");

  let fields: UserField[] | undefined;

  if (fieldsParam) {
    // Basic validation: ensure the requested fields are part of our allowed type
    const allowedFields: UserField[] = [
      "id",
      "email",
      "username",
      "resume",
      "created_at",
      "islive",
    ];
    fields = fieldsParam
      .split(",")
      .filter((f) => allowedFields.includes(f as UserField)) as UserField[];
  }

  const data = await getUserData(fields);

  if (!data) {
    return NextResponse.json(
      { msg: "User not found or unauthorized" },
      { status: 404 },
    );
  }

  return NextResponse.json(data);
}
