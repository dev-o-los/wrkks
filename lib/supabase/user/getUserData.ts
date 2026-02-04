import { auth } from "@clerk/nextjs/server";
import { createClient } from "../server";

// 👇 only allow real columns
export type UserField =
  | "id"
  | "email"
  | "username"
  | "resume"
  | "created_at"
  | "islive";

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data as any;
}
