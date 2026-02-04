"use server";

import { createClient } from "@/lib/supabase/server";
import { currentUser } from "@clerk/nextjs/server";
import SyncUserClient from "./SyncUserClient";

export default async function SyncUser() {
  const clerkUser = await currentUser();
  if (!clerkUser) return null;

  const supabase = await createClient();

  const { data: existingUser } = await supabase
    .from("users")
    .select("clerk_user_id,username,email")
    .eq("clerk_user_id", clerkUser.id)
    .single();

  let user = existingUser;

  if (!existingUser) {
    const email = clerkUser.emailAddresses[0].emailAddress;
    const username = email.split("@")[0];

    const { data: newUser } = await supabase
      .from("users")
      .insert({
        clerk_user_id: clerkUser.id,
        username,
        email,
        resume: null,
      })
      .select()
      .single();

    user = newUser;
  }

  return <SyncUserClient user={user} />;
}
