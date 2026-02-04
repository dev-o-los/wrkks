"use server";

import { createClient } from "@/lib/supabase/server";
import { currentUser } from "@clerk/nextjs/server";

export default async function SyncUser() {
  const clerkUser = await currentUser();
  const supabase = await createClient();

  if (!clerkUser) return null;

  const { data: existingUser } = await supabase
    .from("users")
    .select("id")
    .eq("clerk_user_id", clerkUser.id)
    .single();

  if (!existingUser) {
    const username = clerkUser.emailAddresses[0].emailAddress.split("@")[0];

    await supabase.from("users").insert({
      clerk_user_id: clerkUser.id,
      username,
      email: clerkUser.emailAddresses[0].emailAddress,
      resume: null,
    });
  }

  return null;
}
